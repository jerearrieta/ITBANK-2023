import getAPI from "@/app/services/api";

import Card from "./Card";


export const metadata = {
	title: 'Tarjetas disponibles',
	description: 'Tarjetas disponibles de Guardian Bank',
}


export default async function CardList() {
	const api = getAPI();
	const { data } = await api.get("tarjetas/");

	return (
		<div className="flex flex-col gap-10">
			<h2 className="text-4xl font-bold">Tarjetas de debito</h2>

			{!data.length && <p>Actualmente no posee ninguna tarjeta de debito.</p>}

			<div className="grid gap-8 grid-cols-cards">
				{data.map((card, key) => {
					if (card.tipo === "DEBITO") return <Card key={key} {...card} />;
				})}
			</div>

			<h2 className="text-4xl font-bold">Tarjetas de credito</h2>

			<p>Actualmente no posee ninguna tarjeta de credito.</p>

			<div className="grid gap-8 grid-cols-cards">
				{data.map((card, key) => {
					if (card.tipo === "CREDITO") return <Card key={key} {...card} />;
				})}
			</div>
		</div>
	);
}

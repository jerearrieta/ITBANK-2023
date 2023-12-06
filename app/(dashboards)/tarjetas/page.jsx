import getAPI from "@/app/utils/api";

import Link from "next/link";
import Card from "./Card";


export const metadata = {
	title: 'Tarjetas disponibles',
	description: 'Tarjetas disponibles de Guardian Bank',
}


export default async function CardList() {
	const api = getAPI();
	const { data: tarjetas } = await api.get("tarjetas/");

	const tarjetasDebito = [];
	const tarjetasCredito = [];
	for (const tarjeta of tarjetas) {
		tarjeta.tipo === "DEBITO" ? tarjetasDebito.push(tarjeta) : tarjetasCredito.push(tarjeta);
	}

	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-bold">Tus tarjetas</h1>
					<Link href="/tarjetas/nueva/" className="btn bg-[#02568a] text-white font-semibold">Solicitar nueva tarjeta</Link>
				</div>
				<hr className="border-gray-400" />
			</div>

			<div className="flex flex-col gap-5">
				<h2 className="text-2xl font-bold">Tarjetas de debito</h2>

				{tarjetasDebito.length === 0 && <p>Actualmente no posee ninguna tarjeta de debito.</p>}

				<div className="grid gap-8 grid-cols-cards">
					{tarjetasDebito.map((tarjeta, key) => <Card key={key} {...tarjeta} />)}
				</div>
			</div>

			<hr className="border-gray-400" />

			<div className="flex flex-col gap-5">
				<h2 className="text-2xl font-bold">Tarjetas de credito</h2>

				{tarjetasCredito.length === 0 && <p>Actualmente no posee ninguna tarjeta de credito.</p>}

				<div className="grid gap-8 grid-cols-cards">
					{tarjetasCredito.map((tarjeta, key) => <Card key={key} {...tarjeta} />)}
				</div>
			</div>
		</div>
	);
}

import getAPI, { getCustomerIBANs } from "@/app/services/api";

import Link from "next/link";
import { redirect } from "next/navigation";


export const metadata = {
	title: 'Transferir',
	description: 'Sistema de transferencias de Guardian Bank',
}

function UserAccount({ iban, cliente }) {
	return (
		<Link href={`/transferir/${iban}`} className="flex flex-col self-stretch gap-1">
			<p className="text-lg">{cliente}</p>
			<p className="text-sm">{iban}</p>
		</Link>
	);
}


export default async function Page() {
	const api = getAPI();
	const ibans = await getCustomerIBANs();
	const { data } = await api.get("movimientos/");
	const recientes = data.map(mov => {
		if (ibans.includes(mov.cuenta_origen)) {
			return [mov.cuenta_destino, mov.cliente_destino];
		}

		return [mov.cuenta_origen, mov.cliente_origen];
	});

	async function onSubmit(formData) {
		"use server"

		const iban = formData.get("iban");
		redirect(`/transferir/${iban}`, "push");
	}

	return (
		<div className="flex flex-col gap-10">
			<div>
				<h1 className="text-3xl font-bold mb-4">Transferencias</h1>
				<hr className="border-gray-400" />
			</div>

			<div className="flex flex-col bg-white rounded-xl">
				<h2 className="px-4 py-3 text-2xl font-semibold">Nueva cuenta</h2>
				<hr />
				<form action={onSubmit} className="flex flex-col gap-4 p-4">
					<label htmlFor="iban">Ingrese el IBAN de la cuenta destino</label>
					<input type="text" id="iban" name="iban" className="rounded-md" placeholder="IBAN" />
					<button type="submit" className="self-start px-3 py-2 bg-[#009ee3] text-white rounded-lg font-medium">Confirmar</button>
				</form>
			</div>

			{recientes && (
				<div className="flex flex-col bg-white rounded-xl">
					<h2 className="px-4 py-3 text-2xl font-semibold">Recientes</h2>
					<hr />
					<div className="flex flex-col gap-4 p-4">
						{recientes.map((reciente, key) => <UserAccount key={key} iban={reciente[0]} cliente={reciente[1]} />)}
					</div>
				</div>
			)}
		</div>
	);
}

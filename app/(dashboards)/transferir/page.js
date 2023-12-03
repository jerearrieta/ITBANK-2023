import getAPI from "@/app/services/api";
import { cookies } from "next/headers";

import Link from "next/link";


export const metadata = {
	title: 'Transferir',
	description: 'Sistema de transferencias de Guardian Bank',
}

function UserAccount() {
	return (
		<>
		</>
	);
}


export default async function Page() {
	async function onSubmit(formData) {
		"use server"
	}


	return (
		<>
			<h1 className="text-3xl font-bold mb-4">Transferencias</h1>
			<hr />
			<div className="flex flex-col bg-white rounded-xl">
				<h2 className="px-4 py-2">Nueva cuenta</h2>
				<hr />
				<form action={onSubmit} className="flex flex-col gap-4 p-4">
					<label htmlFor="iban">Ingrese el IBAN de la cuenta destino</label>
					<input type="text" id="iban" className="rounded-md" placeholder="IBAN" />
					<button type="submit" className="self-start px-3 py-2 bg-[#009ee3] text-white rounded-lg font-medium">Confirmar</button>
				</form>
			</div>

			<div className="flex flex-col bg-white rounded-xl mt-10">
				<h2 className="px-4 py-2">Recientes</h2>
				<hr />
				<div className="flex flex-col gap-4 p-4">

				</div>
			</div>
		</>

	);
}

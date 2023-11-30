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
	return (
		<>
			<h1 className="text-3xl font-bold mb-4">Transferencias</h1>

			<div>
				Nueva cuenta
				<button>

				</button>
			</div>

			<div>
				Recientes
			</div>
		</>

	);
}

import ListaRecientes from "./ListaRecientes";
import FormIBAN from "./FormIBAN";


export const metadata = {
	title: 'Transferir',
	description: 'Sistema de transferencias de Guardian Bank',
}


export default async function Page() {
	return (
		<div className="flex flex-col gap-10">
			<div>
				<h1 className="text-3xl font-bold mb-4">Transferencias</h1>
				<hr className="border-gray-400" />
			</div>

			<FormIBAN />

			<ListaRecientes />
		</div>
	);
}

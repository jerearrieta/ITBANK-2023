import getAPI from "@/app/services/api";

export default async function Page() {
	async function validateIban(formData) {
		const api = getAPI();
		const { data } = api.get("");
	}

	return (
		<>
			<h1>Agrega una cuenta</h1>
			<form action={validateIban}>
				<label htmlFor="iban">Ingrese el IBAN</label>
				<input type="text" id="iban" name="id" placeholder="Ingrese el IBAN" />
				<button type="submit">Buscar</button>
			</form>
		</>
	);
}
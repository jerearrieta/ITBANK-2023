import getAPI from "@/app/services/api";


export const metadata = {
  title: 'Tus cuentas',
  description: 'Cuentas disponible de Guardian Bank',
}


function Account({ id, iban, tipo, saldo }) {
  return (
    <div className="flex flex-col flex-1 p-6 rounded-lg bg-white shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]">
      <h2 className="text-xl mb-10 font-bold">{ tipo } Nº { iban }</h2>
      <span className="font-semibold">Saldo</span>
      <span className="text-3xl font-bold">$ { saldo }</span>
      <hr className="border-gray-300 my-5" />
      <a href={`/cuentas/${id}/`}>Ver movimientos</a>
    </div>
  );
}

export default async function AccountList() {
  const api = getAPI();
  const { data } = await api.get("cuentas/");

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Cuentas</h1>

      {!data.length && <p>Actualmente no posee ninguna cuenta.</p>}

      <div className="flex flex-col gap-5 text-blue-800">
        {data.map((account, key) => <Account key={key} {...account} />)}
      </div>
    </div>
  );
}
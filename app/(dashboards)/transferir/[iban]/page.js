import getAPI from "@/app/utils/api";

import TransactionForm from "./FormTransferencia";


export const metadata = {
  title: 'Sistema de transferencias',
  description: 'Sistema de transferencias de Guardian Bank',
}


export default async function Page({ params: { iban } }) {
  const api = getAPI();

  const response = await api.get(`cuentas/${iban}/`);

  return <TransactionForm cuentaDestino={response.data} />;
}

import { getCustomerIBANs } from "@/app/services/api";

import TransactionForm from "./FormTransferencia";


export const metadata = {
    title: 'Sistema de transferencias',
    description: 'Sistema de transferencias de Guardian Bank',
  }


export default async function Page({ params: { iban } }) {
  const ibans = await getCustomerIBANs();

  if (ibans.includes(iban)) {
    return <p>No puedes transferirte a ti mismo</p>;
  }

  return <TransactionForm iban_destino={iban} />;
}

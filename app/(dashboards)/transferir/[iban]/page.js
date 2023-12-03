import { cookies } from "next/headers";

import TransactionForm from "./TransactionForm";


export const metadata = {
    title: 'Sistema de transferencias',
    description: 'Sistema de transferencias de Guardian Bank',
  }


export default async function Page({ params }) {
    

    if (data === null) {
        return <p>No puedes transferirte a ti mismo</p>
    }

    return <TransactionForm id={params.id} first_name={data.first_name} last_name={data.last_name}/>;
}

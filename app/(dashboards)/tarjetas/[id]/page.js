import { createClient } from "@supabase/supabase-js";

import Link from "next/link";

// dynamic = "error" fuerza a que el componente/pagina sea generado de forma estatica, y si algo lo impidiera, lanza un error.
export const dynamic = "error";
export const dynamicParams = false;

export const metadata = {
  title: 'Tarjeta',
  description: 'Tarjetas disponibles de Guardian Bank',
}

// generateStaticParams es el equivalente a getStaticPaths del Pagers Router
export async function generateStaticParams() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const { data } = await supabase.from("cards").select("id");

  return data.map((record) => ({
    id: String(record.id),
  }));
}

export default async function CardDetail({ params }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const { data } = await supabase
    .from("cards")
    .select("number, expiration, cvc, limit")
    .eq("id", params.id)
    .single();

  return (
    <div className="flex mx-auto flex-col w-1/3 border-2 border-black p-4 rounded">
      <div className="flex flex-col items-center mx-auto w-full">
        <p className="py-1">Numero de tarjeta: {data.number}</p>
        <p className="py-1">Fecha de caducidad: {data.expiration}</p>
        <p className="py-1">CVC: {data.cvc}</p>
        <p className="py-1">Limite: {data.limit}</p>
      </div>
      <Link href={`/tarjetas/${params.id}/edit`} className="btn mt-6">
        Modificar limite
      </Link>
    </div>
  );
}

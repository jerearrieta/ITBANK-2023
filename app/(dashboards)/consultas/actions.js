'use server';
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function datos(params) {
    const supabase = createServerActionClient({ cookies })
    const nombre = params.get('nombre');
    const email = params.get('email');
    const celular = params.get('celular');
    const mensaje = params.get('mensaje');

    const { error } = await supabase.from('enquiries').insert({ name: nombre, email: email, phone: celular, message: mensaje });

    if (error) {
        return {status: error.code, name: error.details, message: error.message};
    }

    return null;
  }
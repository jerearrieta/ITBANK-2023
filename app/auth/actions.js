"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


export async function signUp(formData) {
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email');
    const password = formData.get('password');
    const dni = formData.get('dni');
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const birth = formData.get('birth');
    const sex = formData.get('sex');

    const { error } = await supabase.rpc('create_user', { email: email, password: password, dni: dni, first_name: first_name, last_name: last_name, birth: birth, sex: sex });
    
    if (error) return {code: error.code, details: error.details, message: error.message};

    revalidatePath("/transferencias");
    revalidatePath('/transferencias/[id]', 'page');
    revalidatePath('/usuarios/[id]', 'page');

    return null;
}

export async function signIn(formData) {
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email');
    const password = formData.get('password');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    return error && {status: error.status, name: error.name, message: error.message};
}

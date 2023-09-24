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

    var { data: { user }, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        return {status: error.status, name: error.name, message: error.message};
    }

    var { error } = await supabase.from('users').insert({ user_id: user.id, dni: dni, first_name: first_name, last_name: last_name, birth: birth, sex: sex });

    if (error) {
        return {status: error.status, name: error.name, message: error.message};
    }

    revalidatePath('/transferencias/[id]', 'page');

    return null;
}

export async function signIn(formData) {
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email');
    const password = formData.get('password');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    return error && {status: error.status, name: error.name, message: error.message};
}

"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export async function signUp(formData) {
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email');
    const password = formData.get('password');

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        return {status: error.status, name: error.name, message: error.message};
    }

    return null;
}

export async function signIn(formData) {
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email');
    const password = formData.get('password');

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return {status: error.status, name: error.name, message: error.message};
    }

    return null;
}

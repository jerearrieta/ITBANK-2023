"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function signUp(formData) {
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email');
    const password = formData.get('password');

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });
}

export async function signIn(formData) {
    const supabase = createServerActionClient({ cookies });
    const email = formData.get('email');
    const password = formData.get('password');

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error === null) {
        redirect("/home");
    }
}

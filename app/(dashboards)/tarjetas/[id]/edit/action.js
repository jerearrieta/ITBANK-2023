"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


export async function modifyCardLimit(id, limit) {
    const supabase = createServerActionClient({ cookies });

    const { error } = await supabase.from('cards').update({ limit: limit }).eq('id', id);
    
    if (error) return {code: error.code, details: error.details, message: error.message};

    revalidatePath("/tarjetas/[id]");

    return null;
}
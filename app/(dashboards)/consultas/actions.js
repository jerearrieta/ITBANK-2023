'use server';

import { cookies } from "next/headers";

export async function datos(params) {
    const nombre = params.get('nombre');
    const email = params.get('email');
    const celular = params.get('celular');
    const mensaje = params.get('mensaje');

    
  }
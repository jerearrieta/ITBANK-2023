import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default function getAPI (handleAuth=true) {
    const api = axios.create({
		baseURL: 'http://127.0.0.1:8000/api/v1/',
		headers: {
			'Cookie': cookies().toString(),
		}
	});

    api.interceptors.response.use(
        response => response,
        error => {
            if (error.response === undefined) redirect("/");

            if (handleAuth && error.response.status === 403) {
                api.post("logout/");
                redirect("/");
            }

            return Promise.reject(error);
        }
    );

    return api;
}


export async function getCustomerIBANs() {
    const api = getAPI();
    const { data } = await api.get("cuentas/");
    const ibans = [];

    for (const cuenta of data) {
        ibans.push(cuenta.iban);
    }

    return ibans;
}

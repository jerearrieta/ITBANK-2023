import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default function getAPI (handle403=true) {
    const api = axios.create({
		baseURL: 'http://127.0.0.1:8000/api/v1/',
		headers: {
			'Cookie': cookies().toString(),
		}
	});

    api.interceptors.response.use(
        response => response,
        error => {
            if (handle403 && error.response.status === 403) {
                api.post("logout/");
                redirect("/");
            }
            return Promise.reject(error);
        }
    );

    return api;
}

import axios from "axios";
import { useRouter } from "next/navigation";


export default function useAPI (handleAuth=true) {
    const router = useRouter();

    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/v1/',
        withCredentials: true,
        withXSRFToken: true,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
    });

    api.interceptors.response.use(
        response => response,
        error => {
            if (error.response === undefined) redirect("/");

            if (handleAuth && error.response.status === 403) {
                api.post("logout/");
                router.push("/");
            }
            return Promise.reject(error);
        }
    );

    return api;
}

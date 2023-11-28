import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function useAPI (handle403=true) {
    const router = useRouter();

    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/',
        withCredentials: true,
        withXSRFToken: true,
        xsrfCookieName: 'csrftoken',
        xsrfHeaderName: 'X-CSRFToken',
    });

    api.interceptors.response.use(
        response => response,
        error => {
            if (handle403 && error.response.status === 403) {
                router.push("/");
            }
            return Promise.reject(error);
        }
    );

    return api;
}

"use client"

import { useEffect } from "react";
import { initFlowbite } from "flowbite";


export default function ErrorToast({ message }) {
    useEffect(() => initFlowbite());

    return (
        <div className="alert alert-error max-w-sm fixed bottom-5 right-5" id="error-toast">
            <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z" fill="#E92C2C" />
            </svg>
            <div className="flex w-full justify-between">
                <div className="flex flex-col">
                    <p className="font-bold text-[#969696]">Error</p>
                    <p className="text-[#969696]">{message}</p>
                </div>
                <svg className="w-6 h-6 my-auto cursor-pointer" data-dismiss-target="#error-toast" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3007 5.71C17.9107 5.32 17.2807 5.32 16.8907 5.71L12.0007 10.59L7.1107 5.7C6.7207 5.31 6.0907 5.31 5.7007 5.7C5.3107 6.09 5.3107 6.72 5.7007 7.11L10.5907 12L5.7007 16.89C5.3107 17.28 5.3107 17.91 5.7007 18.3C6.0907 18.69 6.7207 18.69 7.1107 18.3L12.0007 13.41L16.8907 18.3C17.2807 18.69 17.9107 18.69 18.3007 18.3C18.6907 17.91 18.6907 17.28 18.3007 16.89L13.4107 12L18.3007 7.11C18.6807 6.73 18.6807 6.09 18.3007 5.71Z" fill="#969696" />
                </svg>
            </div>
        </div>
    );
}
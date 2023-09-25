"use client"

import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import './style.css';

export default function Header() {
    useEffect(() => initFlowbite());

    return (
        <header className='header'>
            <div className="header-left">
                <label htmlFor="drawer-left" className='btn btn-ghost h-auto w-auto p-0'>
                    <AiOutlineMenu className="w-5 h-5" fill='white' />
                </label>

                <Link className="header-logo-container" href="/home"><img className="header-logo" src="/white_logo_title.webp" alt="ITBA" /></Link>
            </div>

            <div className="header-right">
                <Link href='/consultas'>
                    <p className='text-white'>Atencion al cliente</p>
                </Link>
                <p className='text-white'>Notificaciones</p>
                <div class="flex items-center md:order-2">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer ">
                        <svg class="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use href="#a" y="420" /><use href="#a" y="840" /><use href="#a" y="1260" /></g><use href="#a" y="1680" /></g><use href="#b" x="247" y="210" /></g><use href="#c" x="494" /></g><use href="#d" x="988" /><use href="#c" x="1976" /><use href="#e" x="2470" /></g></svg>
                        Español
                    </button>
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                        <ul class="py-2 font-medium" role="none">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="h-3.5 w-3.5 rounded-full mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"><path fill="#ffce00" d="M0 341.3h512V512H0z" /><path d="M0 0h512v170.7H0z" /><path fill="#d00" d="M0 170.7h512v170.6H0z" /></svg>
                                        Español (ARG)
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                    <div class="inline-flex items-center">
                                        <svg class="w-3.5 h-3.5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use href="#a" y="420" /><use href="#a" y="840" /><use href="#a" y="1260" /></g><use href="#a" y="1680" /></g><use href="#b" x="247" y="210" /></g><use href="#c" x="494" /></g><use href="#d" x="988" /><use href="#c" x="1976" /><use href="#e" x="2470" /></g></svg>
                                        English (USA)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
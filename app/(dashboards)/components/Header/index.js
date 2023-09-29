"use client"

import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import Image from 'next/image';
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

                <Link className="header-logo-container" href="/home">
                    <Image className="header-logo" src="/assets/white_logo_title.webp" alt="Guardian Bank" title='Guardian Bank' width="150" height="100" />
                </Link>
            </div>

            <div className="header-right">
                <Link href='/consultas'>
                    <p className='text-white'>Atencion al cliente</p>
                </Link>
                <p className='text-white'>Notificaciones</p>
                <div className="flex items-center md:order-2">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 rounded-full" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v144.7L488 256l24 111.3V512H0V367.3L26 256 0 144.7z" /><path fill="#eee" d="M0 144.7h512v222.6H0z" /><path fill="#ffda44" d="m332.4 256-31.2 14.7 16.7 30.3-34-6.5-4.2 34.3-23.7-25.2-23.6 25.2-4.3-34.3-34 6.5 16.6-30.3-31.2-14.7 31.3-14.7L194 211l34 6.5 4.3-34.3 23.6 25.2 23.6-25.2 4.4 34.3 34-6.5-16.7 30.3z" /></g></svg>
                        Español
                    </button>
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                        <ul className="py-2 font-medium" role="none">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                    <div className="inline-flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-2 rounded-full" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask><g mask="url(#a)"><path fill="#338af3" d="M0 0h512v144.7L488 256l24 111.3V512H0V367.3L26 256 0 144.7z" /><path fill="#eee" d="M0 144.7h512v222.6H0z" /><path fill="#ffda44" d="m332.4 256-31.2 14.7 16.7 30.3-34-6.5-4.2 34.3-23.7-25.2-23.6 25.2-4.3-34.3-34 6.5 16.6-30.3-31.2-14.7 31.3-14.7L194 211l34 6.5 4.3-34.3 23.6 25.2 23.6-25.2 4.4 34.3 34-6.5-16.7 30.3z" /></g></svg>
                                        Español (ARG)
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                    <div className="inline-flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use href="#a" y="420" /><use href="#a" y="840" /><use href="#a" y="1260" /></g><use href="#a" y="1680" /></g><use href="#b" x="247" y="210" /></g><use href="#c" x="494" /></g><use href="#d" x="988" /><use href="#c" x="1976" /><use href="#e" x="2470" /></g></svg>
                                        English (USA)
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
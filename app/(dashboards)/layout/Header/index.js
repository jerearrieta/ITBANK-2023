"use client"

import Image from 'next/image';
import Link from 'next/link';

import white_logo_title from "@/public/assets/white_logo_title.webp";
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosNotifications } from "react-icons/io";


export default function Header() {
    return (
        <header className='fixed w-full header_height header_padding flex justify-between bg-[#23282D] text-white z-10'>
            <div className="flex items-center gap-6">
                <label htmlFor="drawer-left" className='cursor-pointer'>
                    <AiOutlineMenu className="w-5 h-5" />
                </label>

                <Link href="/home" className="h-full">
                    <Image src={white_logo_title} className="w-auto h-full" alt="Guardian Bank" title='Guardian Bank' />
                </Link>
            </div>

            <div className="flex items-center gap-6 sm:gap-12">
                <Link href='/consultas'>Atencion al cliente</Link>
                
                <IoIosNotifications className='w-7 h-7 cursor-pointer' />
            </div>
        </header>
    );
}
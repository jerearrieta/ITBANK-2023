import Link from "next/link";
import Image from "next/image";

import logo_title from "@/public/assets/logo_title.webp";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import styles from './Footer.module.css';


export default function Footer() {
  return (
    <footer className="sm:h-40 flex border-t border-t-black bg-[#D9D9D9] text-black">
      <div className="p-10 hidden min-[960px]:flex">
        <Link href='/home' className="contents">
          <Image src={logo_title} className="max-h-full w-auto self-center" alt="Guardian Bank" title="Guardian Bank" />
        </Link>
      </div>

      <div className="min-w-fit flex flex-1 flex-col sm:flex-row gap-6 mx-auto px-6 py-8">
        <div className={styles.section}>
          <p>example@guardianbank.com</p>
          <p>11 1234-5678 / 11 1234-5678</p>
          <p>Domicilio 1234</p>
        </div>

        <div className={styles.border} />

        <div className={styles.section}>
          <a href="#">Términos y condiciones</a>
          <a href="#">Políticas de privacidad</a>
          <p>© 2023 GUARDIAN BANK</p>
        </div>

        <div className={styles.border} />

        <div className={`${styles.section} ${styles.social_media}`}>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
            <p>/guardianbank</p>
          </a>

          <a href="https://www.twitter.com/" target="_blank">
            <FaTwitter />
            <p>@guardianbank</p>
          </a>

          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
            <p>@guardianbank</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

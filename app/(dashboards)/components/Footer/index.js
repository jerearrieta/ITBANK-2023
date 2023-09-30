import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="p-10 hidden md:flex">
        <Link href='/home'>
          <Image src="/assets/logo_title.webp" alt="Guardian Bank" title="Guardian Bank" width="200" height="200" priority />
        </Link>
      </div>

      <div className="footer-info">
        <div className="contact-info">
          <p>example@guardianbank.com</p>
          <p>11 1234-5678 / 11 1234-5678</p>
          <p>Domicilio 1234</p>
        </div>
        <div className="legal-info">
          <a href="#" aria-label="Términos y condiciones">Términos y condiciones</a>
          <a href="#" aria-label="Políticas de privacidad">Políticas de privacidad</a>
          <p>© 2023 GUARDIAN BANK</p>
        </div>
        <div className="social-media">
          <div>
            <a href="https://www.facebook.com/" aria-label="Guardian Bank en Facebook" className="mx-auto md:m-0">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/" aria-label="Guardian Bank en Facebook" className="hidden md:inline">
              <p>/guardianbank</p>
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com/" aria-label="Guardian Bank en Twitter" className="mx-auto md:m-0">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.twitter.com/" aria-label="Guardian Bank en Twitter" className="hidden md:inline">
              <p>@guardianbank</p>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/" aria-label="Guardian Bank en Instagram" className="mx-auto md:m-0">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/" aria-label="Guardian Bank en Instagram" className="hidden md:inline">
              <p>@guardianbank</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import "./style.css";

export default function Footer() {
  return (
    <footer>
      <Link href='/home'>
        <div className="p-10">
          <Image className="h-16 w-auto"
              src="/logo_title.webp"
              alt="Guardian Bank"
              title="Guardian Bank"
              width="150"
              height="100" />
        </div>
      </Link>

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
            <a href="https://www.facebook.com/" aria-label="Guardian Bank en Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/" aria-label="Guardian Bank en Facebook">
              <p>/guardianbank</p>
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com/" aria-label="Guardian Bank en Twitter">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://www.twitter.com/" aria-label="Guardian Bank en Twitter">
              <p>@guardianbank</p>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/" aria-label="Guardian Bank en Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/" aria-label="Guardian Bank en Instagram">
              <p>@guardianbank</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

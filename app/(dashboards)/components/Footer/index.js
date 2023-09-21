import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import './style.css';

export default function Footer() {
    return (
        <footer>
            <div className="p-10">
                <a href="inicio.html"><img className="h-16 w-auto" src="/logo_title.png" alt="Guardian Bank" title='Guardian Bank' /></a>
            </div>

            <div className="footer-info">
                <div className="contact-info">
                    <p>example@itbank.com</p>
                    <p>11 1234-5678 / 11 1234-5678</p>
                    <p>Domicilio 1234</p>
                </div>
                <div className="legal-info">
                    <a href="#">Terminos y condiciones</a>
                    <a href="#">Politicas de privacidad</a>
                    <p>© 2023 ITBANK</p>
                </div>
                <div className="social-media">
                    <div>
                        <a href="https://www.facebook.com/"><FaFacebook className='w-5 h-5' /></a>
                        <a href="https://www.facebook.com/"><p>/itbank</p></a>
                    </div>
                    <div>
                        <a href="https://www.twitter.com/"><FaTwitter className='w-5 h-5' /></a>
                        <a href="https://www.twitter.com/"><p>@itbank</p></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/"><FaInstagram className='w-5 h-5' /></a>
                        <a href="https://www.instagram.com/"><p>@itbank</p></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

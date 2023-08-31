import './style.css';

export default function Header() {
    return (
        <footer>
            <div class="footer-logo">
                <a href="inicio.html"><img class="logo" src="img/logo.png" alt="ITBA" /></a>
            </div>

            <div class="footer-info">
                <div class="contact-info">
                    <p>example@itbank.com</p>
                    <p>11 1234-5678 / 11 1234-5678</p>
                    <p>Domicilio 1234</p>
                </div>
                <div class="legal-info">
                    <a href="#">Terminos y condiciones</a>
                    <a href="#">Politicas de privacidad</a>
                    <p>© 2023 ITBANK</p>
                </div>
                <div class="social-media">
                    <div>
                        <a href="https://www.facebook.com/"><img class="logo" src="img/facebook.png" alt="ITBA" /></a>
                        <a href="https://www.facebook.com/"><p>/itbank</p></a>
                    </div>
                    <div>
                        <a href="https://www.twitter.com/"><img class="logo" src="img/twitter.png" alt="ITBA" /></a>
                        <a href="https://www.twitter.com/"><p>@itbank</p></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/"><img class="logo" src="img/instagram.png" alt="ITBA" /></a>
                        <a href="https://www.instagram.com/"><p>@itbank</p></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

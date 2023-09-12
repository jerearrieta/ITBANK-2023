import './style.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <a href="inicio.html"><img className="logo" src="img/logo.png" alt="ITBA" /></a>
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
                        <a href="https://www.facebook.com/"><img className="logo" src="img/facebook.png" alt="logo de facebook" /></a>
                        <a href="https://www.facebook.com/"><p>/itbank</p></a>
                    </div>
                    <div>
                        <a href="https://www.twitter.com/"><img className="logo" src="img/twitter.png" alt="logo de twitter" /></a>
                        <a href="https://www.twitter.com/"><p>@itbank</p></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/"><img className="logo" src="img/instagram.png" alt="logo de instagram" /></a>
                        <a href="https://www.instagram.com/"><p>@itbank</p></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

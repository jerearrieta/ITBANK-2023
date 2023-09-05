import './style.css';

export default function Cuentas() {
    return (
        <div className="cuentas-cont-main">
            <div className="cont-cuentas">
                <p className="p-cuentas">Cuentas</p>
                <p className="p-cuentas2">Saldo total de tus cuentas</p>
                <div className="cont-moneda">
                    <div className="pesos">
                        <p className="p-moneda">En pesos</p>
                        <p id="saldo-disponible" className="p-cantidad"></p>
                    </div>
                    <div className="dolares">
                        <p className="p-moneda">En dolares</p>
                        <p id="usd-disponible" className="p-cantidad"></p>
                    </div>
                </div>
            </div>

            <div className="bot">
                <div className="cont-card">
                    <div className="card">
                        <div className="info-card">
                            <div className="top-card">
                                <h3>001-0000001/1</h3>
                                <p className="principal">Principal</p>
                            </div>

                            <sub>SALDO TOTAL</sub>

                            <div className="bot-card">
                                <div>
                                    <p id="saldo-disponible-card" className="info-total"></p>
                                </div>
                                <div className="cont-usd">
                                    <p id="usd-disponible-card" className="info-total"></p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="icon flecha icon-tabler icon-tabler-arrow-badge-right" width="44" height="44" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="info-card">
                            <div className="top-card">
                                <h3>002-0000002/1</h3>
                            </div>

                            <sub>SALDO TOTAL</sub>

                            <div className="bot-card">
                                <div>
                                    <p className="info-total">$ 0</p>
                                </div>
                                <div className="cont-usd">
                                    <p className="info-total">u$d 0</p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="icon flecha icon-tabler icon-tabler-arrow-badge-right" width="44" height="44" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="info-card">
                            <div className="top-card">
                                <h3>003-0000003/1</h3>
                            </div>

                            <sub>SALDO TOTAL</sub>

                            <div className="bot-card">
                                <div>
                                    <p className="info-total">$ 0</p>
                                </div>
                                <div className="cont-usd">
                                    <p className="info-total">u$d 0</p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="icon flecha icon-tabler icon-tabler-arrow-badge-right" width="44" height="44" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
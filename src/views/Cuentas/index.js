import './style.css';

export default function Cuentas() {
    return (
        <div class="cuentas-cont-main">
            <div class="cont-cuentas">
                <p class="p-cuentas">Cuentas</p>
                <p class="p-cuentas2">Saldo total de tus cuentas</p>
                <div class="cont-moneda">
                    <div class="pesos">
                        <p class="p-moneda">En pesos</p>
                        <p id="saldo-disponible" class="p-cantidad"></p>
                    </div>
                    <div class="dolares">
                        <p class="p-moneda">En dolares</p>
                        <p id="usd-disponible" class="p-cantidad"></p>
                    </div>
                </div>
            </div>

            <div class="bot">
                <div class="cont-card">
                    <div class="card">
                        <div class="info-card">
                            <div class="top-card">
                                <h3>001-0000001/1</h3>
                                <p class="principal">Principal</p>
                            </div>

                            <sub>SALDO TOTAL</sub>

                            <div class="bot-card">
                                <div>
                                    <p id="saldo-disponible-card" class="info-total"></p>
                                </div>
                                <div class="cont-usd">
                                    <p id="usd-disponible-card" class="info-total"></p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon flecha icon-tabler icon-tabler-arrow-badge-right" width="44" height="44" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="info-card">
                            <div class="top-card">
                                <h3>002-0000002/1</h3>
                            </div>

                            <sub>SALDO TOTAL</sub>

                            <div class="bot-card">
                                <div>
                                    <p class="info-total">$ 0</p>
                                </div>
                                <div class="cont-usd">
                                    <p class="info-total">u$d 0</p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon flecha icon-tabler icon-tabler-arrow-badge-right" width="44" height="44" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="info-card">
                            <div class="top-card">
                                <h3>003-0000003/1</h3>
                            </div>

                            <sub>SALDO TOTAL</sub>

                            <div class="bot-card">
                                <div>
                                    <p class="info-total">$ 0</p>
                                </div>
                                <div class="cont-usd">
                                    <p class="info-total">u$d 0</p>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="icon flecha icon-tabler icon-tabler-arrow-badge-right" width="44" height="44" viewBox="0 0 24 24"
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
import './style.css';

export default function Calculadora() {
    return (
        <>
            <div class="loan-calculator">
                <h1>Calcular prestamos</h1>
                <div class="loan-calculator-box">
                    <div class="loan-calculator-field-box">
                        <p>Importe</p>
                        <input type="number" id="amount-input" class="field" />
                    </div>
                    <div class="loan-calculator-field-box">
                        <p>Interés</p>
                        <input type="number" id="interest-input" class="field" />
                    </div>
                    <div class="loan-calculator-field-box">
                        <p>Plazo de amortización</p>
                        <div class="time-field-box">
                            <select id="time-selector" class="time-selector">
                                <option value="mes">Meses</option>
                                <option value="año">Años</option>
                            </select>
                            <input type="number" id="time-input" class="time-input" />
                        </div>
                    </div>
                    <div class="loan-calculator-button-box">
                        <button id="loan-calculator-button" class="loan-calculator-button">Calcular</button>
                    </div>
                </div>
            </div>

            <div class="loan-calculator">
                <h2>Resultados</h2>
                <div class="loan-calculator-box">
                    <div class="loan-calculator-field-box">
                        <p>Cuota mensual</p>
                        <input type="text" id="monthly-payment" class="field" disabled />
                    </div>
                    <div class="loan-calculator-field-box">
                        <p>Total intereses</p>
                        <input type="text" id="total-interest" class="field" disabled />
                    </div>
                </div>
            </div>
        </>
    );
}
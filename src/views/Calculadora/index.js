import './style.css';

export default function Calculadora() {
    return (
        <>
            <div className="loan-calculator">
                <h1>Calcular prestamos</h1>
                <div className="loan-calculator-box">
                    <div className="loan-calculator-field-box">
                        <p>Importe</p>
                        <input type="number" id="amount-input" className="field" />
                    </div>
                    <div className="loan-calculator-field-box">
                        <p>Interés</p>
                        <input type="number" id="interest-input" className="field" />
                    </div>
                    <div className="loan-calculator-field-box">
                        <p>Plazo de amortización</p>
                        <div className="time-field-box">
                            <select id="time-selector" className="time-selector">
                                <option value="mes">Meses</option>
                                <option value="año">Años</option>
                            </select>
                            <input type="number" id="time-input" className="time-input" />
                        </div>
                    </div>
                    <div className="loan-calculator-button-box">
                        <button id="loan-calculator-button" className="loan-calculator-button">Calcular</button>
                    </div>
                </div>
            </div>

            <div className="loan-calculator">
                <h2>Resultados</h2>
                <div className="loan-calculator-box">
                    <div className="loan-calculator-field-box">
                        <p>Cuota mensual</p>
                        <input type="text" id="monthly-payment" className="field" disabled />
                    </div>
                    <div className="loan-calculator-field-box">
                        <p>Total intereses</p>
                        <input type="text" id="total-interest" className="field" disabled />
                    </div>
                </div>
            </div>
        </>
    );
}
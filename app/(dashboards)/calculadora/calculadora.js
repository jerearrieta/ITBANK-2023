'use client';
import { useState } from 'react';

export default function Calculadora() {
    const [inputs, setInputs] = useState({
        "amount-input": "",
        "interest-input": "",
        "time-selector": "mes",
        "time-input": ""
    });
    const [results, setResults] = useState({
        "monthly-payment": "",
        "total-interest": ""
    });

    function calculateLoan(amount, interest, months) {
        interest = interest / 12;
        let monthlyPayment = amount / ((((1 + interest)**months) - 1) / (interest*(1 + interest)**months));
        let totalInterest = (monthlyPayment * months) - amount;
    
        return [monthlyPayment.toFixed(2), totalInterest.toFixed(2)];
    
    }

    function handleInputsChange(e) {
        let aux = { ...inputs };
        aux[e.target.id] = e.target.value;
        setInputs(aux);
    }

    function handleOnButtonPressed(_) {
        let amount = parseFloat(inputs["amount-input"]);
        let interest = parseFloat(inputs["interest-input"]) / 100;
        let timeSelection = inputs["time-selector"];
        let time = parseInt(inputs["time-input"]);
    
        if (timeSelection === "año") {
            time *= 12;
        }

        let [monthlyPayment, totalInterest] = calculateLoan(amount, interest, time);

        setResults({
            "monthly-payment": `$ ${monthlyPayment}`,
            "total-interest": `$ ${totalInterest}`
        });
    }

    return (
        <>
            <div className="loan-calculator">
                <h1 className='mx-auto'>Calcular prestamos</h1>
                <div className="loan-calculator-box">
                    <div className="loan-calculator-field-box">
                        <p>Importe</p>
                        <input type="number" id="amount-input" className="field" onInput={handleInputsChange} />
                    </div>
                    <div className="loan-calculator-field-box">
                        <p>Interés</p>
                        <input type="number" id="interest-input" className="field" onInput={handleInputsChange} />
                    </div>
                    <div className="loan-calculator-field-box">
                        <p>Plazo de amortización</p>
                        <div className="time-field-box">
                            <select id="time-selector" className="time-selector" onChange={handleInputsChange}>
                                <option value="mes">Meses</option>
                                <option value="año">Años</option>
                            </select>
                            <input type="number" id="time-input" className="time-input" onInput={handleInputsChange} />
                        </div>
                    </div>
                    <div className="loan-calculator-button-box">
                        <button id="loan-calculator-button" className="loan-calculator-button" onClick={handleOnButtonPressed}>Calcular</button>
                    </div>
                </div>
            </div>

            <div className="loan-calculator">
                <h2 className='mx-auto'>Resultados</h2>
                <div className="loan-calculator-box">
                    <div className="loan-calculator-field-box">
                        <p>Cuota mensual</p>
                        <input type="text" id="monthly-payment" className="field" disabled value={results["monthly-payment"]} />
                    </div>
                    <div className="loan-calculator-field-box">
                        <p>Total intereses</p>
                        <input type="text" id="total-interest" className="field" disabled value={results["total-interest"]} />
                    </div>
                </div>
            </div>
        </>
    );
}
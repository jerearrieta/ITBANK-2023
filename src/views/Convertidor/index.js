import './style.css';

export default function Convertidor() {
    return (
        <div className="currency-converter">
            <h1>Convertidor de monedas</h1>
            <div className="currency-converter-box">
                <div className="currency-item-box">
                    <div className="currency-item">
                        <select id="left-currency-selector" className="currency-selector">
                            <option value="0">ARS</option>
                            <option value="1" selected>USD</option>
                            <option value="2">EUR</option>
                            <option value="3">CAD</option>
                            <option value="4">AUD</option>
                            <option value="5">NZD</option>
                            <option value="6">BRL</option>
                            <option value="7">MXN</option>
                            <option value="8">UYU</option>
                            <option value="9">PYG</option>
                            <option value="10">CLP</option>
                            <option value="11">COP</option>
                            <option value="12">BOB</option>
                            <option value="13">JPY</option>
                            <option value="14">GBP</option>
                        </select>
                        <input type="number" id="left-currency-input" className="currency-input" value="1" />
                    </div>
                    <img id="exchange-icon" className="transfer-icon" src="img/transfer.png" alt="" />
                    <div className="currency-item">
                        <select id="right-currency-selector" className="currency-selector">
                            <option value="0">ARS</option>
                            <option value="1">USD</option>
                            <option value="2">EUR</option>
                            <option value="3">CAD</option>
                            <option value="4">AUD</option>
                            <option value="5">NZD</option>
                            <option value="6">BRL</option>
                            <option value="7">MXN</option>
                            <option value="8">UYU</option>
                            <option value="9">PYG</option>
                            <option value="10">CLP</option>
                            <option value="11">COP</option>
                            <option value="12">BOB</option>
                            <option value="13">JPY</option>
                            <option value="14">GBP</option>
                        </select>
                        <input type="number" id="right-currency-input" className="currency-input" />
                    </div>
                </div>
                <p id="currency-info-top" className="currency-info"></p>
                <p id="currency-info-bottom" className="currency-info"></p>
            </div>
        </div>
    );
}
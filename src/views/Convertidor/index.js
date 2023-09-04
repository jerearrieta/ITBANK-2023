import './style.css';

export default function Convertidor() {
    return (
        <div class="currency-converter">
            <h1>Convertidor de monedas</h1>
            <div class="currency-converter-box">
                <div class="currency-item-box">
                    <div class="currency-item">
                        <select id="left-currency-selector" class="currency-selector">
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
                        <input type="number" id="left-currency-input" class="currency-input" value="1" />
                    </div>
                    <img id="exchange-icon" class="transfer-icon" src="img/transfer.png" alt="" />
                    <div class="currency-item">
                        <select id="right-currency-selector" class="currency-selector">
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
                        <input type="number" id="right-currency-input" class="currency-input" />
                    </div>
                </div>
                <p id="currency-info-top" class="currency-info"></p>
                <p id="currency-info-bottom" class="currency-info"></p>
            </div>
        </div>
    );
}
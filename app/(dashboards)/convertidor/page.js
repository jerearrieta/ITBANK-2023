import { useState, useEffect } from 'react';
import './style.css';


const currencies = ["ARS", "USD", "EUR", "CAD", "AUD", "NZD", "BRL", "MXN", "UYU", "PYG", "CLP", "COP", "BOB", "JPY", "GBP"];

const testExchanges = [
    [1, 0.0028573393, 0.0026481549, 0.0038810558, 0.004452418, 0.0048279823, 0.013948733, 0.048094204, 0.10859249, 20.892153, 2.4288297, 11.716378, 0.019812141, 0.41760974, 0.0022717976], // ARS = 0
    [349.98458, 1, 0.92711302, 1.3586036, 1.558872, 1.6901624, 4.880643, 16.835799, 38.0539, 7313.0556, 850.27279, 4097.9623, 6.9342162, 146.14321, 0.79528794], // USD = 1
    [377.45998, 1.0785168, 1, 1.4653023, 1.6809137, 1.8226023, 5.2652531, 18.156134, 40.949062, 7884.721, 915.78838, 4418.6979, 7.4769835, 157.61527, 0.85764141], // EUR = 2
    [257.57528, 0.73594463, 0.68246022, 1, 1.1470035, 1.2435971, 3.5927216, 12.389826, 28.002869, 5384.189, 625.69044, 3013.7745, 5.1034859, 107.5299, 0.58523816], // CAD = 3
    [224.62362, 0.64186793, 0.59501043, 0.87205378, 1, 1.0842597, 3.1333972, 10.80234, 24.375266, 4692.9838, 545.54196, 2631.5219, 4.4506225, 93.726685, 0.51030289], // AUD = 4
    [207.1515, 0.59182661, 0.54862247, 0.80415, 0.92228741, 1, 2.8889518, 9.9600938, 22.517958, 4327.7846, 503.13609, 2425.054, 4.1029001, 86.397948, 0.47056481], // NZD = 5
    [71.694288, 0.20483043, 0.18990883, 0.2783681, 0.3192333, 0.34613518, 1, 3.4477784, 7.795048, 1498.1604, 174.16744, 839.3189, 1.4204541, 29.908304, 0.1629268], // BRL = 6
    [20.794803, 0.059413671, 0.055081428, 0.080746746, 0.092617894, 0.10039882, 0.29001914, 1, 2.2609105, 434.58838, 50.44658, 243.4396, 0.41182846, 8.6751909, 0.047253299], // MXN = 7
    [9.2075933, 0.026308979, 0.024392928, 0.035740503, 0.040992023, 0.044435995, 0.1283319, 0.44245047, 1, 192.21905, 22.345517, 107.70619, 0.18225305, 3.8382792, 0.020901972], // UYU = 8
    [0.047848231, 0.00013671741, 0.00012677264, 0.00018585733, 0.00021314002, 0.00023105066, 0.00066741016, 0.0023012348, 0.0052024376, 1, 0.11623963, 0.56038293, 0.00094817856, 0.019969315, 0.0001087633], // PYG = 9
    [0.4115886, 0.0011761985, 0.0010904046, 0.0015986335, 0.0018334305, 0.0019874342, 0.0057415646, 0.019797107, 0.044758215, 8.6023219, 1, 4.817652, 0.0081558402, 0.17175737, 0.00093569033], // CLP = 10
    [0.08542839, 0.00024410683, 0.00022631081, 0.00033179274, 0.00038044476, 0.0004124419, 0.0011915436, 0.0041081808, 0.0092888502, 1.7852374, 0.20735932, 1, 0.0016922257, 0.035643869, 0.00019414676], // COP = 11
    [50.488086, 0.14425939, 0.13372697, 0.19610036, 0.2248142, 0.24375828, 0.70417808, 2.4278831, 5.4849194, 1054.9132, 122.58703, 590.89894, 1, 21.062022, 0.11470147], // BOB = 12
    [2.3965273, 0.0068476235, 0.0063479804, 0.0093090845, 0.01067144, 0.011568194, 0.033429652, 0.11525963, 0.26054639, 50.078941, 5.8217062, 28.061808, 0.047481232, 1, 0.0054457299], // JPY = 13
    [440.03049, 1.2573507, 1.1656319, 1.7093519, 1.9601151, 2.1248395, 6.1377558, 21.165666, 47.844215, 9197.1903, 1069.0685, 5148.9212, 8.7180559, 183.58463, 1], // GBP = 14
]

function updateExchanges(callback) {
    const promises = [];

    for (let i = 0; i < currencies.length; i++) {
        promises.push(
            fetch(`https://v6.exchangerate-api.com/v6/d18a0131d56963de55960c1c/latest/${currencies[i]}`)
                .then(response => response.json())
                .then(data => {
                    const exchanges = [];
                    for (const currency of currencies) {
                        exchanges.push(data.conversion_rates[currency]);
                    }

                    return exchanges;
                })
        );
    }

    Promise.all(promises).then((exchanges) => callback(exchanges));
}

export default function Convertidor() {
    const [exchanges, setExchanges] = useState([]);
    const [exchangeInputs, setExchangeInputs] = useState({
        "left-currency-selector": 1,
        "left-currency-input": 1,
        "right-currency-selector": 0,
        "right-currency-input": 1
    });
    const [exchangeTexts, setExchangeTexts] = useState({
        "currency-info-top": "",
        "currency-info-bottom": ""
    });

    //useEffect(() => updateExchanges(setExchanges), []);
    useEffect(() => setExchanges(testExchanges), []);

    useEffect(() => {
        if (exchanges.length > 0) {
            updateValues({ ...exchangeInputs }, "left-currency-input");
        }
    }, [exchanges]);

    function updateValues(aux, id) {
        if (id === "right-currency-input") {
            aux["left-currency-input"] = "";
            if (aux["right-currency-input"] !== "") {
                aux["left-currency-input"] = (aux["right-currency-input"] * exchanges[aux["right-currency-selector"]][aux["left-currency-selector"]]).toFixed(4);
            }
        }
        else {
            aux["right-currency-input"] = "";
            if (aux["left-currency-input"] !== "") {
                aux["right-currency-input"] = (aux["left-currency-input"] * exchanges[aux["left-currency-selector"]][aux["right-currency-selector"]]).toFixed(4);
            }
        }

        setExchangeInputs(aux);
        setExchangeTexts({
            "currency-info-top": `1 ${currencies[aux["left-currency-selector"]]} = ${exchanges[aux["left-currency-selector"]][aux["right-currency-selector"]].toFixed(4)} ${currencies[aux["right-currency-selector"]]}`,
            "currency-info-bottom": `1 ${currencies[aux["right-currency-selector"]]} = ${exchanges[aux["right-currency-selector"]][aux["left-currency-selector"]].toFixed(4)} ${currencies[aux["left-currency-selector"]]}`
        });
    }

    function handleChangeExchangeInputs(e) {
        const aux = { ...exchangeInputs };
        aux[e.target.id] = e.target.value && parseFloat(e.target.value);
        updateValues(aux, e.target.id);
    }

    function swapCurrencies(_) {
        const aux = {
            "left-currency-selector": exchangeInputs["right-currency-selector"],
            "left-currency-input": exchangeInputs["left-currency-input"],
            "right-currency-selector": exchangeInputs["left-currency-selector"],
            "right-currency-input": exchangeInputs["right-currency-input"]
        };
        updateValues(aux, "left-currency-input");
    }

    return (
        <div className="currency-converter">
            <h1>Convertidor de monedas</h1>
            <div className="currency-converter-box">
                <div className="currency-item-box">
                    <div className="currency-item">
                        <select id="left-currency-selector" className="currency-selector" value={exchangeInputs["left-currency-selector"]} onChange={handleChangeExchangeInputs}>
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
                        <input type="number" id="left-currency-input" className="currency-input" value={exchangeInputs["left-currency-input"]} onInput={handleChangeExchangeInputs} />
                    </div>
                    <img id="exchange-icon" className="transfer-icon" src="img/transfer.png" alt="" onClick={swapCurrencies} />
                    <div className="currency-item">
                        <select id="right-currency-selector" className="currency-selector" value={exchangeInputs["right-currency-selector"]} onChange={handleChangeExchangeInputs}>
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
                        <input type="number" id="right-currency-input" className="currency-input" value={exchangeInputs["right-currency-input"]} onInput={handleChangeExchangeInputs} />
                    </div>
                </div>
                <p id="currency-info-top" className="currency-info">{exchangeTexts["currency-info-top"]}</p>
                <p id="currency-info-bottom" className="currency-info">{exchangeTexts["currency-info-bottom"]}</p>
            </div>
        </div>
    );
}
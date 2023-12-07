"use client";

import { useState, useEffect } from "react";

import { BiTransferAlt } from "react-icons/bi";


export default function Conversor() {
  const currencies = [
    "ARS",
    "USD",
    "EUR",
    "CAD",
    "AUD",
    "NZD",
    "BRL",
    "MXN",
    "UYU",
    "PYG",
    "CLP",
    "COP",
    "BOB",
    "JPY",
    "GBP",
  ];

  function updateExchanges(callback) {
    const promises = [];

    for (let i = 0; i < currencies.length; i++) {
      promises.push(
        fetch(
          `https://v6.exchangerate-api.com/v6/d18a0131d56963de55960c1c/latest/${currencies[i]}`
        )
          .then((response) => response.json())
          .then((data) => {
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
  const [exchanges, setExchanges] = useState([]);
  const [exchangeInputs, setExchangeInputs] = useState({
    "left-currency-selector": 1,
    "left-currency-input": 1,
    "right-currency-selector": 0,
    "right-currency-input": 1,
  });
  const [exchangeTexts, setExchangeTexts] = useState({
    "currency-info-top": "",
    "currency-info-bottom": "",
  });

  useEffect(() => updateExchanges(setExchanges), []);

  useEffect(() => {
    if (exchanges.length > 0) {
      updateValues({ ...exchangeInputs }, "left-currency-input");
    }
  }, [exchanges]);

  function updateValues(aux, id) {
    if (id === "right-currency-input") {
      aux["left-currency-input"] = "";
      if (aux["right-currency-input"] !== "") {
        aux["left-currency-input"] = (
          aux["right-currency-input"] *
          exchanges[aux["right-currency-selector"]][
            aux["left-currency-selector"]
          ]
        ).toFixed(4);
      }
    } else {
      aux["right-currency-input"] = "";
      if (aux["left-currency-input"] !== "") {
        aux["right-currency-input"] = (
          aux["left-currency-input"] *
          exchanges[aux["left-currency-selector"]][
            aux["right-currency-selector"]
          ]
        ).toFixed(4);
      }
    }

    setExchangeInputs(aux);
    setExchangeTexts({
      "currency-info-top": `1 ${
        currencies[aux["left-currency-selector"]]
      } = ${exchanges[aux["left-currency-selector"]][
        aux["right-currency-selector"]
      ].toFixed(4)} ${currencies[aux["right-currency-selector"]]}`,
      "currency-info-bottom": `1 ${
        currencies[aux["right-currency-selector"]]
      } = ${exchanges[aux["right-currency-selector"]][
        aux["left-currency-selector"]
      ].toFixed(4)} ${currencies[aux["left-currency-selector"]]}`,
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
      "right-currency-input": exchangeInputs["right-currency-input"],
    };
    updateValues(aux, "left-currency-input");
  }

  return (
    <div className="currency-converter">
      <h1 className="mx-auto">Convertidor de monedas</h1>
      <div className="currency-converter-box">
        <div className="currency-item-box">
          <div className="currency-item">
            <select
              id="left-currency-selector"
              className="currency-selector"
              aria-label="Selector de moneda"
              value={exchangeInputs["left-currency-selector"]}
              onChange={handleChangeExchangeInputs}
            >
              <option value="0">ARS</option>
              <option value="1" selected>
                USD
              </option>
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
            <input
              type="number"
              id="left-currency-input"
              className="currency-input"
              value={exchangeInputs["left-currency-input"]}
              onInput={handleChangeExchangeInputs}
            />
          </div>
          <BiTransferAlt
            className="w-6 h-6 hover:cursor-pointer"
            onClick={swapCurrencies}
          />
          <div className="currency-item">
            <select
              id="right-currency-selector"
              className="currency-selector"
              aria-label="Selector de moneda"
              value={exchangeInputs["right-currency-selector"]}
              onChange={handleChangeExchangeInputs}
            >
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
            <input
              type="number"
              id="right-currency-input"
              className="currency-input"
              value={exchangeInputs["right-currency-input"]}
              onInput={handleChangeExchangeInputs}
            />
          </div>
        </div>
        <p id="currency-info-top" className="currency-info">
          {exchangeTexts["currency-info-top"]}
        </p>
        <p id="currency-info-bottom" className="currency-info">
          {exchangeTexts["currency-info-bottom"]}
        </p>
      </div>
    </div>
  );
}

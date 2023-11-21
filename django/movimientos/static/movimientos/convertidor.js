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

let exchanges = [];

function updateExchanges(callback) {
    const promises = [];

    for (const currency1 of currencies) {
        promises.push(
            fetch(
                `https://v6.exchangerate-api.com/v6/d18a0131d56963de55960c1c/latest/${currency1}`
            )
                .then((response) => response.json())
                .then((data) => {
                    const exchanges = [];
                    for (const currency2 of currencies) {
                        exchanges.push(data.conversion_rates[currency2]);
                    }

                    return exchanges;
                })
        );
    }

    Promise.all(promises).then((exchanges) => callback(exchanges));
}

function swapCurrencies(_) {
    leftCurrencySelector = document.getElementById("left-currency-selector");
    rightCurrencySelector = document.getElementById("right-currency-selector");
    leftCurrencyInput = document.getElementById("left-currency-input");

    aux = leftCurrencySelector.value;
    leftCurrencySelector.value = rightCurrencySelector.value;
    rightCurrencySelector.value = aux;
    updateValues(leftCurrencyInput);
}

function updateValues(modifiedInput) {
    leftCurrencySelector = document.getElementById("left-currency-selector");
    leftCurrencyInput = document.getElementById("left-currency-input");
    rightCurrencySelector = document.getElementById("right-currency-selector");
    rightCurrencyInput = document.getElementById("right-currency-input");

    leftCurrencyValue = parseInt(leftCurrencySelector.value);
    leftInputValue = parseFloat(leftCurrencyInput.value);
    rightCurrencyValue = parseInt(rightCurrencySelector.value);
    rightInputValue = parseFloat(rightCurrencyInput.value);

    if (modifiedInput.id === "right-currency-input") {
        leftCurrencyInput.value = (rightInputValue * exchanges[rightCurrencyValue][leftCurrencyValue]).toFixed(4);
    }
    else {
        rightCurrencyInput.value = (leftInputValue * exchanges[leftCurrencyValue][rightCurrencyValue]).toFixed(4);
    }

    leftCurrencyText = currencies[leftCurrencyValue];
    rightCurrencyText = currencies[rightCurrencyValue];

    document.getElementById("currency-info-top").innerHTML = `1 ${leftCurrencyText} = ${exchanges[leftCurrencyValue][rightCurrencyValue].toFixed(4)} ${rightCurrencyText}`;
    document.getElementById("currency-info-bottom").innerHTML = `1 ${rightCurrencyText} = ${exchanges[rightCurrencyValue][leftCurrencyValue].toFixed(4)} ${leftCurrencyText}`;
}

function load() {
    leftCurrencyInput = document.getElementById("left-currency-input");
    updateExchanges((exch) => {
        exchanges = exch;
        updateValues(leftCurrencyInput);
    });
}

window.addEventListener("load", load, false);
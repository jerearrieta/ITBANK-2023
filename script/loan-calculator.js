

function calculateLoan(amount, interest, months) {
    i = interest / 12
    monthlyPayment = amount / ((((1 + i)**months) - 1) / (i*(1 + i)**months))
    totalInterest = (monthlyPayment * months) - amount;
    console.log(monthlyPayment, totalInterest);

    return [monthlyPayment.toFixed(2), totalInterest.toFixed(2)];

}

function calculateButtonPressed(_) {
    amount = parseFloat(document.getElementById("amount-input").value);
    interest = parseFloat(document.getElementById("interest-input").value) / 100;
    timeSelection = document.getElementById("time-selector").value;
    time = parseInt(document.getElementById("time-input").value);

    if (timeSelection === "año") {
        time *= 12;
    }

    console.log(amount, interest, time);
    let calculation = calculateLoan(amount, interest, time);
    monthlyPayment = calculation[0];
    totalInterest = calculation[1];

    document.getElementById("monthly-payment").value = `$ ${monthlyPayment}`;
    document.getElementById("total-interest").value = `$ ${totalInterest}`;
}

function load(){
    document.getElementById("loan-calculator-button").addEventListener("click", calculateButtonPressed);
}

window.addEventListener("load", load, false);

function calculateLoan(_) {
    amount = parseFloat(document.getElementById("amount-input").value);
    interest = parseFloat(document.getElementById("interest-input").value) / 100;
    timeSelection = document.getElementById("time-selector").value;
    time = parseInt(document.getElementById("time-input").value);

    if (timeSelection === "año") {
        time *= 12;
    }

    interest = interest / 12;
    let monthlyPayment = amount / ((((1 + interest)**time) - 1) / (interest*(1 + interest)**time));
    let totalInterest = (monthlyPayment * time) - amount;
    monthlyPayment = monthlyPayment.toFixed(2);
    totalInterest = totalInterest.toFixed(2);

    document.getElementById("monthly-payment").value = `$ ${monthlyPayment}`;
    document.getElementById("total-interest").value = `$ ${totalInterest}`;
}

// Conversiones actualizadas al 25/08/2023 00:00 (https://www.xe.com/es/currencyconverter/convert/)
const currencyMap = [
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

function updateCurrencies(modifiedInput) {
    leftCurrencySelector = document.getElementById("left-currency-selector");
    leftCurrencyInput = document.getElementById("left-currency-input");
    rightCurrencySelector = document.getElementById("right-currency-selector");
    rightCurrencyInput = document.getElementById("right-currency-input");

    leftCurrencyValue = parseFloat(leftCurrencySelector.value);
    leftInputValue = parseFloat(leftCurrencyInput.value);
    rightCurrencyValue = parseFloat(rightCurrencySelector.value);
    rightInputValue = parseFloat(rightCurrencyInput.value);

    if (modifiedInput.id === "right-currency-input") {
        leftCurrencyInput.value = (rightInputValue * currencyMap[rightCurrencyValue][leftCurrencyValue]).toFixed(4);
    }
    else {
        rightCurrencyInput.value = (leftInputValue * currencyMap[leftCurrencyValue][rightCurrencyValue]).toFixed(4);
    }

    leftCurrencyText = leftCurrencySelector.options[leftCurrencySelector.selectedIndex].text;
    rightCurrencyText = rightCurrencySelector.options[rightCurrencySelector.selectedIndex].text;

    document.getElementById("currency-info-top").innerHTML = `1 ${leftCurrencyText} = ${currencyMap[leftCurrencyValue][rightCurrencyValue].toFixed(4)} ${rightCurrencyText}`;
    document.getElementById("currency-info-bottom").innerHTML = `1 ${rightCurrencyText} = ${currencyMap[rightCurrencyValue][leftCurrencyValue].toFixed(4)} ${leftCurrencyText}`;
}

function load(){
    leftCurrencySelector = document.getElementById("left-currency-selector");
    leftCurrencyInput = document.getElementById("left-currency-input");
    rightCurrencySelector = document.getElementById("right-currency-selector");
    rightCurrencyInput = document.getElementById("right-currency-input");
    
    leftCurrencySelector.addEventListener("change", (event) => updateCurrencies(event.target));
    leftCurrencyInput.addEventListener("input", (event) => updateCurrencies(event.target));
    rightCurrencySelector.addEventListener("change", (event) => updateCurrencies(event.target));
    rightCurrencyInput.addEventListener("input", (event) => updateCurrencies(event.target));
    
    document.getElementById("exchange-icon").addEventListener("click", (_) => {
        aux = leftCurrencySelector.value;
        leftCurrencySelector.value = rightCurrencySelector.value;
        rightCurrencySelector.value = aux;
        updateCurrencies(leftCurrencyInput);
    });

    updateCurrencies(leftCurrencyInput);
}

window.addEventListener("load", load, false);

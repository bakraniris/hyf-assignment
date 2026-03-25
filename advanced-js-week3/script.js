var amountInput = document.getElementById("amount");
var fromCurrency = document.getElementById("fromCurrency");
var toCurrency = document.getElementById("toCurrency");
var result = document.getElementById("result");

var rates = {};

async function fetchRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();
    rates = data.rates;
    rates["USD"] = 1;

    Object.keys(rates).forEach(function(currency) {
      var optionFrom = document.createElement("option");
      optionFrom.value = currency;
      optionFrom.text = currency;
      fromCurrency.appendChild(optionFrom);

      var optionTo = document.createElement("option");
      optionTo.value = currency;
      optionTo.text = currency;
      toCurrency.appendChild(optionTo);
    });

    fromCurrency.value = "EUR";
    toCurrency.value = "DKK";

    convert();
  } catch (error) {
    result.textContent = "Error loading rates";
  }
}

function delayConversion(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

async function convert() {
  var amount = parseFloat(amountInput.value);
  if (!amount) {
    result.textContent = "Result: -";
    return;
  }

  await delayConversion(500);

  var from = fromCurrency.value;
  var to = toCurrency.value;

  var amountInUSD = amount / rates[from];
  var converted = amountInUSD * rates[to];

  result.textContent = "Result: " + converted.toFixed(2) + " " + to;
}

amountInput.addEventListener("input", convert);
fromCurrency.addEventListener("change", convert);
toCurrency.addEventListener("change", convert);

fetchRates();
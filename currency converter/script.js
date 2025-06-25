const form = document.getElementById("currency-form");
const fromSelect = document.getElementById("from-select");
const toSelect = document.getElementById("to-select");
const amountInput = document.getElementById("amount-input");
const resultDiv = document.getElementById("conversion-result");

window.addEventListener("DOMContentLoaded", loadCurrencies);
form.addEventListener("submit", performConversion);

async function loadCurrencies() {
  try {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    const currencies = Object.keys(data.rates);

    currencies.forEach(currency => {
      const optionFrom = document.createElement("option");
      optionFrom.value = currency;
      optionFrom.textContent = currency;
      fromSelect.appendChild(optionFrom);

      const optionTo = document.createElement("option");
      optionTo.value = currency;
      optionTo.textContent = currency;
      toSelect.appendChild(optionTo);
    });

    // Set default selections
    fromSelect.value = "USD";
    toSelect.value = "EUR";
  } catch (error) {
    resultDiv.textContent = "Failed to load currency data. Please try again later.";
  }
}

async function performConversion(event) {
  event.preventDefault();

  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive amount.");
    return;
  }

  try {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const rate = data.rates[toCurrency];
    if (!rate) {
      resultDiv.textContent = "Conversion rate unavailable for the selected currency.";
      return;
    }

    const converted = (amount * rate).toFixed(2);
    resultDiv.textContent = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
  } catch (error) {
    resultDiv.textContent = "Error fetching conversion rate. Please try again.";
  }
}

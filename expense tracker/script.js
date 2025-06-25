const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income-amount");
const expenseEl = document.getElementById("expense-amount");
const listEl = document.getElementById("transaction-list");
const formEl = document.getElementById("transaction-form");
const descEl = document.getElementById("description");
const amtEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateDOM() {
  listEl.innerHTML = "";
  [...transactions].reverse().forEach(tx => {
    const li = document.createElement("li");
    li.classList.add("transaction");
    li.classList.add(tx.amount > 0 ? "income" : "expense");
    li.innerHTML = `
      <span>${tx.description}</span>
      <span>
        ${formatCurrency(tx.amount)}
        <button class="delete-btn" onclick="deleteTransaction(${tx.id})">x</button>
      </span>
    `;
    listEl.appendChild(li);
  });

  const total = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  const income = transactions.filter(tx => tx.amount > 0).reduce((acc, tx) => acc + tx.amount, 0);
  const expenses = transactions.filter(tx => tx.amount < 0).reduce((acc, tx) => acc + tx.amount, 0);

  balanceEl.textContent = formatCurrency(total);
  incomeEl.textContent = formatCurrency(income);
  expenseEl.textContent = formatCurrency(expenses);
}

function formatCurrency(num) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
}

function deleteTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  updateDOM();
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const desc = descEl.value.trim();
  const amt = parseFloat(amtEl.value);

  if (desc === "" || isNaN(amt)) return;

  const tx = { id: Date.now(), description: desc, amount: amt };
  transactions.push(tx);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  updateDOM();
  formEl.reset();
});

updateDOM();

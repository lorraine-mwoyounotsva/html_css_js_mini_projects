# Expense Tracker

## Overview

This is a simple web-based Expense Tracker that allows users to manage their personal finances by tracking incomes and expenses. It calculates the current balance, total income, and total expenses dynamically based on the user input.

## Features

- Add transactions with a description and amount.
- Positive numbers represent income; negative numbers represent expenses.
- Displays transaction history.
- Calculates and displays balance, income, and expenses.
- Transactions are saved to localStorage, so they persist on page reload.
- Modern UI with pastel color palette and responsive layout.

## How it Works

- The form collects a description and amount.
- On submit, the transaction is added to an array and saved to localStorage.
- The UI updates the transaction list and summary sections using JavaScript DOM manipulation.
- Users can delete individual transactions.

## What I Learned

- DOM manipulation using vanilla JavaScript.
- Persisting data in the browser using localStorage.
- Building responsive layouts with CSS Grid.
- Creating visually pleasing UI using pastel color gradients and shadows.
- Improving code readability by separating concerns (HTML, CSS, JS).
- Using Intl.NumberFormat for formatting currency.

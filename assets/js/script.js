// Only run the js code when the DOM has completely loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        start();
    })

    document.getElementById('name').focus();
    setMaxDate();

    document.getElementById('table').addEventListener('click', onDeleteButton);
})

/**
 * when the submit button is clicked, this reads the inserted values
 * and checks if it can go forward to render the table 
 */
function start() {
    const amount = Math.round(document.getElementById('amount').value * 1e2) / 1e2;
    const amountString = String(document.getElementById('amount').value);
    if (amount >= 100000) {
        alert('Value number is too big.');
    } else if (amountString.includes('-')) {
        alert("Negative numbers aren't allowed.");
    } else {
        valueConfig();
        onAddTable();
    }
    document.getElementById('name').value = '';
    document.getElementById('name').focus();
    document.getElementById('date').value = null;
    document.getElementById('amount').value = '';
}

/**
 *only allow the date to be selected up until the current day
 */
function setMaxDate() {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    let month = todayDate.getMonth() + 1;
    let day = todayDate.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    const maxDate = year + '-' + month + '-' + day;
    document.getElementById('date').setAttribute('max', maxDate);
}

/**
 * update the numbers on the app header
 */
function valueConfig() {
    //Getting the value from the form
    const entryValue = Math.round(document.getElementById('amount').value * 1e2) / 1e2;

    //assigning variables to the HTML elements from the app header
    let innerTotalValue = document.getElementById('total');
    let innerIncome = document.getElementById('income');
    let innerExpense = document.getElementById('expense');

    //assigning the number variables which will be dynamic
    const totalValue = Math.round(innerTotalValue.innerHTML * 1e2) / 1e2;
    const income = Math.round(innerIncome.innerHTML * 1e2) / 1e2;
    const expense = Math.round(innerExpense.innerHTML * 1e2) / 1e2;
    //getting the toggle button info and ajust numbers on expense || income
    if (document.querySelector('#check').checked) {
        innerIncome.innerHTML = income + entryValue;
        innerTotalValue.innerHTML = totalValue + entryValue;
    } else {
        innerExpense.innerHTML = expense + entryValue;
        innerTotalValue.innerHTML = totalValue - entryValue;
    }
}

function onAddTable() {
    document.querySelector('#no-values').style.display = 'none';
    document.querySelector('#table').style.display = 'inline-table';

    const tbodyEl = document.querySelector('tbody');
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const amountNumber = Math.round(document.getElementById('amount').value * 1e2) / 1e2;
    const type = (document.querySelector('#check').checked);
    let typeString = '';

    if (type) {
        typeString = 'Income';
    } else {
        typeString = 'Expense';
    }

    tbodyEl.innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${date}</td>
        <td>${amountNumber}</td>
        <td>${typeString}</td>
        <td><button class="delete-btn">Delete</button</td>
    </tr>
    `;
}

//Delete the current row when the delete button is clicked, and make the maths on app header
function onDeleteButton(e) {
    if (!e.target.classList.contains('delete-btn')) {
        return;
    } else {
        //getting the value that's about to be deleted and the values from the app head
        const btn = e.target;
        const amountDeleted = parseFloat(btn.parentNode.parentNode.children.item(2).innerHTML);
        const tot = parseFloat(document.getElementById('total').innerHTML);
        const inc = parseFloat(document.getElementById('income').innerHTML);
        const exp = parseFloat(document.getElementById('expense').innerHTML);
        const typeOfValue = (btn.parentNode.parentNode.children.item(3).innerHTML);

        //making the math

        if (typeOfValue === 'Expense') {
            document.getElementById('expense').innerHTML = exp - amountDeleted;
            document.getElementById('total').innerHTML = tot + amountDeleted;
        } else {
            document.getElementById('total').innerHTML = tot - amountDeleted;
            document.getElementById('income').innerHTML = inc - amountDeleted;
        }
        //removing the current row
        btn.closest('tr').remove();
    }
};
// Only run the js code when the DOM has completely loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        start();
    })

    //automatically focus the name field when the page loads
    document.getElementById('name').focus();

    //focusing the name field when the toggle switch is clicked
    document.querySelector('.check-btn').addEventListener('click', function () {
        document.getElementById('name').focus();
    })
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
    if (amount > 1000000) {
        alert('Maximum value is one million.');
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
    <tr class="tb-row">
        <td>${name}</td>
        <td>${date}</td>
        <td>${amountNumber}</td>
        <td>${typeString}</td>
        <td><button class="delete-btn">Delete</button><button class="delete-btn-mdq">X</button></td>
    </tr>
    `;
}

//Delete the current row when the delete button is clicked, and do the math on app header
function onDeleteButton(e) {
    if (e.target.classList.contains('delete-btn') || e.target.classList.contains('delete-btn-mdq')) {
        //getting the value that's about to be deleted and the values from the app head
        const btn = e.target;
        const amountDeleted = Math.round(btn.parentNode.parentNode.children.item(2).innerHTML * 1e2) / 1e2;
        const tot = Math.round(document.getElementById('total').innerHTML * 1e2) / 1e2;
        const inc = Math.round(document.getElementById('income').innerHTML * 1e2) / 1e2;
        const exp = Math.round(document.getElementById('expense').innerHTML * 1e2) / 1e2;
        const typeOfValue = (btn.parentNode.parentNode.children.item(3).innerHTML);

        //making the math

        if (typeOfValue === 'Expense') {
            document.getElementById('expense').innerHTML = Math.round((exp - amountDeleted) * 1e2) / 1e2;
            document.getElementById('total').innerHTML = Math.round((tot + amountDeleted) * 1e2) / 1e2;
        } else {
            document.getElementById('total').innerHTML = Math.round((tot - amountDeleted) * 1e2) / 1e2;
            document.getElementById('income').innerHTML = Math.round((inc - amountDeleted) * 1e2) / 1e2;
        }

        //removing the current row
        btn.closest('tr').remove();

        //Displaying the phrase (no values) if there are no rows in the DOM and hiding the table head
        const rows = document.getElementsByClassName('tb-row');
        if (rows.length === 0) {
            document.querySelector('#no-values').style.display = 'block';
            document.querySelector('#table').style.display = 'none';
        }
    }
}
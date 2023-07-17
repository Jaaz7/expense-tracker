// Only run the js code when the DOM has completely loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        start();
    })
    document.getElementById('name').focus();
    setMaxDate();
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
    } else if (amountString.includes('-' && 'e')) {
        alert("Negative numbers and special characters aren't allowed.");
    } else {
        valueConfig();
        addTable();
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

/**
 * capture the inserted data and set to an array so it's prepared
 * to show inside the table with the function addTable()
 */
function displayTableData() {
    const values = [];
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const amountNumber = Math.round(document.getElementById('amount').value * 1e2) / 1e2;
    const type = (document.querySelector('#check').checked);

    if (type) {
        let id = values.length + 1;
        values.push({ number: id, name: name, date: date, value: amountNumber, type: 'Income' });
    } else {
        let id = values.length + 1;
        values.push({ number: id, name: name, date: date, value: amountNumber, type: 'Expense' });
    }
    return values;
}

function addTable() {
    let array = displayTableData();
    let html = `
        <table id="table">
            <thead>
                <tr>
                    <th>
                        No.
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Date
                    </th>
                    <th>
                        Value
                    </th>
                    <th>
                        Type
                    </th>
                </tr>
            </thead>
            <tbody>
            `;
    for (let i = 0; i < array.length; i++) {
        html += '<tr>';
        html += '<td>' + array[i].number + '</td>';
        html += '<td>' + array[i].name + '</td>';
        html += '<td>' + array[i].date + '</td>';
        html += '<td>' + array[i].value + '</td>';
        html += '<td>' + array[i].type + '</td>';
    }
    html += `
            </tr>
            </tbody>
            </table>
            `;
    const list = document.getElementById('list').innerHTML = html;

}
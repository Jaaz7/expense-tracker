// Only run the js code when the DOM has completely loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        runTable();
    })
    document.getElementById('name').focus();
    setMaxDate();
})

function runTable() {
    const values = [];
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value).toFixed(2);
    if (amount >= 100000) {
        alert('Value number is too big.');
    } else {
        valueConfig();
        const list = document.getElementById('list');
        list.innerHTML = `
    <table id="table">
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Date
                </th>
                <th>
                    Value
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    ${name}
                </td>
                <td>
                    ${date}
                </td>
                <td>
                    ${amount}
                </td>
            </tr>
        </tbody>
    </table>`;
    }
    document.getElementById('name').value = '';
    document.getElementById('name').focus();
    document.getElementById('date').value = null;
    document.getElementById('amount').value = '';
}

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
    innerTotalValue.innerHTML = totalValue + entryValue;
    if (entryValue < 0) {
        const inverted = Math.abs(entryValue);
        innerExpense.innerHTML = expense + inverted;
    } else {
        innerIncome.innerHTML = income + entryValue;
    }
}
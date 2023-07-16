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
    const expense = parseFloat(document.getElementById('amount').value).toFixed(2);
    if (expense >= 100000) {
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
                    ${expense}
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
    const entryValue = parseFloat(document.getElementById('amount').value).toFixed(2);
    const innerTotalValue = document.getElementById('total').innerHTML;
    const totalValue = parseFloat(innerTotalValue.match((/(\d+)/)));
    const innerIncome = document.getElementById('income').innerHTML;
    const innerExpense = document.getElementById('expense').innerHTML;
    console.log(entryValue);
    console.log(totalValue);
    console.log(income);
    console.log(expense);
}
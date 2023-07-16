// Only run the js code when the DOM has completely loaded
document.addEventListener('DOMContentLoaded', function () {
    let submit = document.getElementById('submit');

    if (submit) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
    document.getElementById('name').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            runTable();
        }
    })

    runGame('add');
})


/**
 * Allow only numbers and one dot as a decimal separator
 * in enter expense input
 */
function validate(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}
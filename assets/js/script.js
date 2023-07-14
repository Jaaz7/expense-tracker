/**
 * Allow only numbers and one dot as a decimal separator
 * in enter expense input
 */
function validate(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}
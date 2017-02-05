/**
 * @author Created by mel on 2/4/17.
 */

$(document).ready(function() {
    var num1 = "";
    var num2 = "";
    var doThings = "";
    var screen = $('#input');
    screen.text("0");

    //limits the total number of digits entered to 15.
    var testNumLength = function(number) {
        if (number.length > 9) {
            screen.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                num1 = "";
                screen.text("Err");
            }
        }
    };

    //gets the numbers selected by the user, appends them to the num1 variable and writes them to the user display.
    $('#numbers > a').not('#clear, #clearall').click(function() {
        num1 += $(this).text();
        screen.text(num1);
        testNumLength(num1);
    });

});
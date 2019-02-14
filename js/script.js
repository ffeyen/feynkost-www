var delaySlow = 500;
var delayFast= 0;

$(document).ready(function() {
    $("#div-datenschutz").hide();
    $("#div-impressum").hide();

    $("#tab-datenschutz").click(function() {
        if ($("#div-impressum").is(':hidden') === true) {
             $("#div-datenschutz").toggle(delaySlow);
        } else {
            $("#div-impressum").hide(delayFast);
            $("#div-datenschutz").toggle(delayFast);
        }
    });

    $("#tab-impressum").click(function() {
        if ($("#div-datenschutz").is(':hidden') === true) {
            $("#div-impressum").toggle(delaySlow);
        } else {
            $("#div-datenschutz").hide(delayFast);
            $("#div-impressum").toggle(delayFast);
        }
    });
});
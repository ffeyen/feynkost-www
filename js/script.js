var delaySlow = 500;
var delayFast= 0;

$(document).ready(function() {
    $("#div-datenschutz, #div-impressum, .tab-content").hide();

    $("#tab-datenschutz").click(function() {
        $(".tab-content").show();
        if ($("#div-impressum").is(':hidden') === true) {
            $("#div-datenschutz").toggle(delaySlow);
        } else {
            $("#div-impressum").hide(delayFast);
            $("#div-datenschutz").toggle(delayFast);     
        }
        setTimeout(checkTabContent, delaySlow);
    });

    $("#tab-impressum").click(function() {
        $(".tab-content").show();
        if ($("#div-datenschutz").is(':hidden') === true) {
            $("#div-impressum").toggle(delaySlow);
        } else {
            $("#div-datenschutz").hide(delayFast);
            $("#div-impressum").toggle(delayFast);
        }
        setTimeout(checkTabContent, delaySlow);
    });

    function checkTabContent() {
        if ($("#div-datenschutz").is(':visible') === true || $("#div-impressum").is(':visible') === true) {
            $(".tab-content").show();
        } else {
            $(".tab-content").hide();
        }
    };
});
$(document).ready(function () {
    $('.burger__button').click(function (event) {
        $('.nav__list, .container, .nav__link, .burger__button, body').toggleClass('burger_active');
        if ($(".burger__button").hasClass("burger_active")) {
            $("div.burger__button").html('&#128473;');
        } else {
            $("div.burger__button").html('&#9776;');
        }
    });
});
//Burger
$(document).ready(function () {
    $('.icon__menu').click(function (event) {
        $('.icon__menu,.menu__body').toggleClass('menu-open');
        $('body').toggleClass('lock');
    });
});

//Scroll
var header = $(".header");
var scrollChange = 1;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header__scroll');
    } else {
        header.removeClass("header__scroll");
    }
});


//Spoiler
$(function () {
    $(document).on('click', '.spollers-pathway__title', function (e) {
        e.preventDefault()
        $(this).parent().children('.spollers-pathway__body').toggle()
    });
});
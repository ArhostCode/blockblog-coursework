$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
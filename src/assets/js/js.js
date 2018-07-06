$(function () {
    $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });

    $('.colapse').on('click', function (e) {
        $(this).nextAll().slideToggle();
        e.preventDefault();
    });
});
$(function () {
    $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });

    $('.colapse').on('click', function (e) {
        $(this).nextAll().slideToggle();
        if($(this).hasClass('fa-caret-down')){
            $(this).removeClass('fa-caret-down');
            $(this).addClass('fa-caret-up');
        }else{
            $(this).removeClass('fa-caret-up');
            $(this).addClass('fa-caret-down');
        }
        e.preventDefault();
    });
});
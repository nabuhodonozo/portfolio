$(function () {
    $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });

    $('.colapse').on('click', function (e) {
        $(this).nextAll().slideToggle();
        if ($(this).hasClass('fa-caret-down')) {
            $(this).removeClass('fa-caret-down');
            $(this).addClass('fa-caret-up');
        } else {
            $(this).removeClass('fa-caret-up');
            $(this).addClass('fa-caret-down');
        }
        e.preventDefault();
    });

$('a').click(function(){		
		var hashindex = $(this).attr("href").indexOf('#');
		var hreflen = $(this).attr("href").length;
		var anchortag = $(this).attr("href").substr(hashindex, hreflen);
    $('html, body').animate({
        scrollTop: $( anchortag ).offset().top
    }, 700);
    return false;
	});

});
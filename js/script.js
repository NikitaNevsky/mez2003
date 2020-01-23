$(document).ready(function () {
	$('.burger-menu').on('click', function () {
	    $('.menu').addClass('d-block');
	    $('.burger-menu').addClass('d-none');
	    $('.close-menu').addClass('d-block');
	 });

	  $('.close-menu').on('click', function () {
	    $('.menu').removeClass('d-block');
	    $('.burger-menu').removeClass('d-none');
	    $('.close-menu').removeClass('d-block');
	  });
});	

$(document).ready(function() {
    $(".go_to").click(function() {
        var e = $(this).attr("href");
        return 0 != $(e).length && $("html, body").animate({
            scrollTop: $(e).offset().top
        }, 500),
            !1
    })
})
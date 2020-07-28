$(document).ready(function() {
    $('.burger-menu').click(function(event) {
    $('.burger-menu,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
    });
});
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
});
$('.slick-testimonial').slick({
    dots: true,
});
$(function(){
	$('.tabs a').click(function() {
		$(this).parents('.projects-container').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		let id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});	
})  
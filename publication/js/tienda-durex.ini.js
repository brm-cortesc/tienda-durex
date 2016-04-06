 var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
	screenWidth = $(window).width();

jQuery(document).ready(function($) {
	/*Scroll down*/
	$('.scroll').click(function() {
		$('html,body').animate({scrollTop:$(window).scrollTop()+580+'px'},1000);
	});

});
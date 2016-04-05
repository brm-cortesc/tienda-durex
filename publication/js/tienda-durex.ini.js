 var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
	screenWidth = $(window).width();

jQuery(document).ready(function($) {

	/*animaciones de entrada*/

	$('.bottle, .descripcion-actividad, .counter, .btn-ir, .num div').css('opacity', '0');
	$('body').addClass('animated fadeIn');

	$('body').one(animationEnd, function () {
		$(this).removeClass('animated fadeIn');
	});


	$('body').one(animationEnd, function() {
		$(this).removeClass('animated fadeIn');

		if (screenWidth > 570) {

			$('.bottle').addClass('animated fadeInLeft');

		}else{

			$('.bottle').addClass('animated fadeInUp');

		};


		$('.descripcion-actividad, .counter, .btn-ir').addClass('animated fadeInUp');
	});

	$('.bottle').one(animationEnd, function() {
		$('.bottle, .descripcion-actividad, .counter, .btn-ir').removeClass('animated fadeInUp fadeInLeft').css('opacity', '1');

		// $('.num div').css('opacity', '0');
		
	});

	$('.counter').one(animationEnd, function () {
		$('.num div').css('opacity', '1');
		
		var numero = $('.num div').addClass('animated bounceInUp');

	});

	$('.num div').one(animationEnd, function () {
			

			$(this).removeClass('animated bounceInUp');

	}); 


	/*Scroll down*/
	$('.scroll').click(function() {
		$('html,body').animate({scrollTop:$(window).scrollTop()+580+'px'},1000);
	});

});
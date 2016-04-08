 var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
	screenWidth = $(window).width();

jQuery(document).ready(function($) {
	
	/*paneles de seccion "micuenta"*/
	$('.botones-perfil .btn').click(function() {

		var tipo = $(this).attr('data-btn'),
			formCta = $('.cuenta');
		
		$('.botones-perfil .btn').removeClass('active');
		$(this).addClass('active');

		switch(tipo){

			case 'perfil':
				formCta.addClass('hidden');		
				$('#datos-personales').removeClass('hidden');		
			break;
			
			case 'preferencias':

				formCta.addClass('hidden');		
				$('#preferencias').removeClass('hidden');		
			break;

			case 'suscripcion':

				formCta.addClass('hidden');		
				$('.datos-sucripcion').removeClass('hidden');		
				
			break;

			case 'ordenes':

				formCta.addClass('hidden');		
				$('.datos-ordenes').removeClass('hidden');		
			break;


		};

		
	});
	/*paneles de seccion "micuenta"*/

	/* play/pause estado de suscripcion*/

	$('.pausar-suscripcion').click(function(event) {
		event.preventDefault();

		$(this).text('activar');
		$('.suscripcion .status').toggleClass('status-paused');
		$('.suscripcion .status p').text('pausada');

		if( !$('.status').hasClass('status-paused') ){
			$('.suscripcion .status p').text('activada');
			$(this).text('pausar');
		};



	});

	/* play/pause estado de suscripcion*/

	/*Seleccion de membresia*/
	$('.membresia').click(function() {
		
		$('.membresia').removeClass('membresia-active');
		$(this).addClass('membresia-active');
		
		// if (  $(window).scrollTop() == 0 ) {
		// 	$('html,body').animate({scrollTop:$(window).scrollTop()+580+'px'},1000);
		// };

	});
	
	/*Seleccion de membresia*/

	/* Mostrar/ocultar mini login */
	$('.perfil a').click(function(event) {
		event.preventDefault();

		$('.mini-login').toggleClass('animated bounceInDown hidden');
		$('.mini-cart').addClass('hidden');
		$('.mini-cart').removeClass('animated bounceInDown');
		event.stopPropagation();
		
	});
	/* Mostrar/ocultar mini login */
	/* Mostrar/ocultar mini cart */
	$('.status-cart a').click(function(event) {
		event.preventDefault();

		$('.mini-login').addClass('hidden');
		$('.mini-login').removeClass('animated bounceInDown');
		$('.mini-cart').toggleClass('animated bounceInDown hidden');

		event.stopPropagation();
		
	});
	$('body').click(function(event) {
		
		if ( !$(event.target).is('.mini-login *, .mini-cart *')  ) {

			$('.mini-login, .mini-cart').addClass('hidden');
			$('.mini-login, .mini-cart').removeClass('animated bounceInDown');

		};
		event.stopPropagation();

	});
	/* Mostrar/ocultar mini cart */

	/*Mostrar fields legales*/

	$('.lista-legales a').click(function(event) {

		var tipo = $(this).attr('data-tipo');
	
		event.preventDefault();

		$('.lista-legales li').removeClass('active');
		$(this).parent().toggleClass('active');

		switch(tipo){

			case 'politicas':
				$('.row-legales article').addClass('hidden');
				$('article.politicas').toggleClass('hidden');
			break;

			case 'terminos':
				$('.row-legales article').addClass('hidden');
				$('article.terminos').toggleClass('hidden');
			break;

			case 'pedidos':
				$('.row-legales article').addClass('hidden');
				$('article.pedidos').toggleClass('hidden');
			break;

		};



	});


});

/*contador cantidad de condones membresia*/

$(document).on('change', '.membresia-active .cantidad-condon', function () {

	var baseCondones = $('.membresia-active .cantidad'),
		inputCantidad = $('.membresia-active .cantidad-condon'),
		inputVal = baseCondones.attr('data-base'),
		restaCondones = baseCondones.text();

		$('.membresia-active .bg-danger span').text(inputVal);

		$('.membresia-active .cantidad-condon').each(function() {
			
			inputVal -=  + $(this).val();

		});


		if ( inputVal < 0  ){

			console.log('me pasé');
			inputVal = 0;
			baseCondones.text(inputVal);

			$('.membresia-active .bg-danger').removeClass('hidden');

			$('.btn-go-checkout').addClass('disabled');

		}else{

			baseCondones.text(inputVal);
			$('.membresia-active .bg-danger').addClass('hidden');

			$('.btn-go-checkout').removeClass('disabled');
		};


});
/*contador cantidad de condones membresia*/


	



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

	/*Quitar item del carrito*/
	$('.remove').click(function(){+
	   $(this).parent().parent().remove();

	});
	/*Quitar item del carrito*/

	/*Seleccion de membresia*/
	$('.membresia').click(function() {
		
		$('.membresia').removeClass('membresia-active');
		$(this).addClass('membresia-active');
		
		// if (  $(window).scrollTop() == 0 ) {
		// 	$('html,body').animate({scrollTop:$(window).scrollTop()+580+'px'},1000);
		// };

	});
	/*Seleccion de membresia*/



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


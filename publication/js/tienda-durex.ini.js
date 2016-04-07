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

});
jQuery(document).ready( function( $ ){
	var data = {
		action: 'hello',
		name: myPlugin.name
	};

	// с версии 2.8 'ajaxurl' всегда определен в админке
	jQuery.get( myPlugin.ajaxurl, data, function( response ){
		alert( 'Получено с сервера: ' + response );
	} );
} );
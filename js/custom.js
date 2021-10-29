jQuery(document).ready( function( $ ){

	jQuery(document).on('click', '.vacancy-btn', function(e){

		e.preventDefault();

		const $this = $(this),
			  value = $this.attr('data-filter');

		var data = {
			action: 'hello',
			slug: value

		};

		// jQuery.get( beet_ajax.ajaxurl, data, function( response ){
		// 	return response.json();
		// 	})
		//  	.then(i => console.log(typeof i))

		$.ajax({
			url:  beet_ajax.ajaxurl,
			dataType: 'json',
			data: data,
			success: function (data) {
				console.log(data);
			}
		});


	});
} );


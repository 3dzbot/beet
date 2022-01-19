const searchAjax = () => {
	/**
	 * Cart Spinner Change
	 */
	jQuery(document).on('keyup', '.search', function(event){

		event.preventDefault();

		const   $this       = jQuery(this),
		 value       = $this.val(),
		 $result     = jQuery('.searchResultAjax'),
		 $reset      = jQuery('.header-form__button-reset');

		if( value.length ) {
			$this.parent().addClass('search__preload');
			$reset.show();
		}else{
			$this.parent().removeClass('search__preload');
			$result.html('');
			$reset.hide();
		}

		/**
		 * Ajax
		 */
		jQuery.ajax( {
			beforeSend  :   function(){ },
			data        :   {
				action  :   'search_ajax',
				s       :   value
			},
			dataType    :   'json',
			method      :   'POST',
			complete    :   function(){

				$this.parent().removeClass('search__preload');

			},
			success     :   function( response ){
				console.log(response);
				$result.html(response.data.html);

			},
			url         :   beet_ajax.ajaxurl,
		} );

		console.log(value)

	});

	/**
	 * Clear Input
	 */
	jQuery(document).on('click', '.header-form__button-reset', function(event){

		event.preventDefault();

		jQuery('.header-form__input').val('');
		jQuery('.searchResultAjax').html('');
		jQuery(this).hide();

	});


	/**
	 * Hide Search Result
	 * @mouseup
	 */
	jQuery(document).mouseup(function (e){

		var div = jQuery('.header-form');

		if (!div.is(e.target)
		 && div.has(e.target).length === 0) {

			jQuery('.header-form__input').val('');
			jQuery('.searchResultAjax').html('');
			jQuery('.header-form__button-reset').hide();

		}

	});
}

export default searchAjax;
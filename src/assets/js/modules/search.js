import createVacancyCard from './createCards';

const searchAjax = () => {
	/**
	 * Cart Spinner Change
	 */
	const searchInput = document.querySelector('input.search');
	const searchCheckboxArr = document.querySelectorAll('.search_form__column_list input');

	if(!!searchCheckboxArr.length) {
		searchCheckboxArr.forEach(item => {
			item.addEventListener('change', searchFunction);
		})
	}

	if(searchInput) {
		searchInput.addEventListener('keyup', searchFunction);
	}

	function searchFunction(e) {
		const target = e.currentTarget;
		const form = target.closest('form');
		const val = form.querySelector('input[name="s"]').value;

		const places = [];
		const skills = [];

		jQuery('input[name="places"]:checked').each(function() {
			places.push(jQuery(this).val());
		});

		jQuery('input[name="skills"]:checked').each(function() {
			skills.push(jQuery(this).val());
		});

		const url = beet_ajax.ajaxurl;

		jQuery.ajax( {
			beforeSend  :   function(){ },
			data        :   {
				action  :   'search_ajax',
				s       :   val,
				skills,
				places
			},
			dataType    :   'json',
			method      :   'POST',
			complete    :   function(){
			},
			success     :   function( response ){
				createVacancyCard(response.data.result.vacancy);
			},
			url,
		} );
	}

	jQuery(document).on('keyup', '.search', function(event){
		return;
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

	});
}

export default searchAjax;
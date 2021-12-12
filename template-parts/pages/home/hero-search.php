<?php
get_search_form();

showSome();
?>

<form action="#" class="search_form">
	<label class="search_form__column">
		<input class="search" name="search" type="text" placeholder="Search job openings">
	</label>
	<button type="submit" class="submit"></button>
	<span class="search_form__column">
		<span class="search_form__column_header">All departments</span>
		<span class="wrap">
			<ul class="search_form__column_list">
				<li><label><input type="checkbox">1 lorem</label></li>
				<li><label><input type="checkbox">2 lorem</label></li>
				<li><label><input type="checkbox">3 lorem</label></li>
				<li><label><input type="checkbox">4 lorem</label></li>
				<li><label><input type="checkbox">5 lorem</label></li>
			</ul>
		</span>
	</span>
	<span class="search_form__column">
		<span class="search_form__column_header search_location">All locations</span>
		<span class="wrap">
			<ul class="search_form__column_list">
				<li><label><input type="checkbox">1 lorem</label></li>
				<li><label><input type="checkbox">2 lorem</label></li>
				<li><label><input type="checkbox">3 lorem</label></li>
				<li><label><input type="checkbox">4 lorem</label></li>
				<li><label><input type="checkbox">5 lorem</label></li>
			</ul>
		</span>
	</span>
</form>
<!-- /.search_form -->
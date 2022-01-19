<?php

$taxList = get_object_taxonomies('vacances', 'objects');
$searchTaxObj = [];


if($taxList) {
	foreach ($taxList as $tax) :
		$terms = get_terms([
			'taxonomy' => $tax->name,
		]);
		$searchTaxObj[$tax->name]['tax_info'] = $tax;
		$searchTaxObj[$tax->name]['tax_items'] = $terms;
	endforeach;
}
?>

<form action="#" class="search_form">
	<label class="search_form__column">
		<input class="search" name="s" type="text" placeholder="Search job openings">
	</label>
	<button type="submit" class="submit"></button>
	<?php if($searchTaxObj) :
		foreach ($searchTaxObj as $tax) :
			$currObj = $tax['tax_info']->labels;
			$taxSlug = $currObj->name;
			$titleAll = $currObj->all_items;
		?>

	<span class="search_form__column">
		<span class="search_form__column_header"><?= $titleAll ?></span>
		<span class="wrap">
			<?php if($tax_items = $tax['tax_items']) : ?>
			<ul class="search_form__column_list">
				<?php foreach ($tax_items as $tax_item) {
					$termName = $tax_item->name;
					$termTaxonomy = $tax_item->taxonomy;
					echo "<li><label><input type='checkbox' name='$termTaxonomy' value='$termName'>$termName</label></li>";
				} ?>
			</ul>
			<?php endif; ?>
		</span>
	</span>
	<?php
		endforeach;
	endif;
	?>
</form>
<!-- /.search_form -->
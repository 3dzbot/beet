<?php
$title	= get_the_title();
$subtitle = get_the_content();
?>

<section class="hero">
	<div class="container">
		<h1 class="section__title"><?= $title ?></h1>
		<!-- /.section__title -->
		<?= $subtitle ?>

		<?php
		/*
	 	* Home: hero
	 	*/
		get_template_part('template-parts/pages/home/hero', 'search');
		?>

		<?php
		/*
	 	* Home: hero
	 	*/
		get_template_part('template-parts/pages/home/hero', 'list');
		?>

	</div>
	<!-- /.container -->
</section>
<!-- /.hero -->

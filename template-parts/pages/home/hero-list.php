<?php

$terms = get_terms( [
	'taxonomy' => 'skills',
	'hide_empty' => false,
] );

?>

<div class="vacancy__wrapper">
	<?php if($terms) :
		usort($terms, 'cmp');
		$haveHot = chekHot($terms);
		if($haveHot) {
			$term = $terms[$haveHot];
			unset($terms[$haveHot]);
			array_unshift($terms, $term);
		}
		$count = 1;
	?>
	<div class="vacancy__header">
		<ul class="vacancy__header_list d_inline_flex">
		<?php  if ($terms) foreach ($terms as $term) { ?>
			<?php
			$name = $term->name;
			$slug = $term->slug;
			$termId = $term->term_id;
			$termCount = $term->count;
			?>
			<li class="<?php if($count === 1) echo 'active'; ?>"><button data-filter='<?= $slug ?>' class='button vacancy-btn'><?= $name ?>&nbsp;&nbsp;<span><?= $termCount ?></span></button></li>
		<?php
			$count++;
		} ?>
		</ul>
	</div>
	<!-- /.vacancy__header -->
	<?php endif; ?>
	<?php

    $termSlug = $terms[0]->slug;
	$args = array(
		'post_type' => 'vacances',
		'tax_query' => array(
			array(
				'taxonomy' => 'skills',
				'field'    => 'slug',
				'terms'    => $termSlug
			)
		)
	);
	$query = new WP_Query( $args );
	?>

	<?php if ( $query->have_posts() ) : ?>

		<!-- пагинация -->
	<div class="vacancy__row">
		<!-- цикл -->
		<?php while ( $query->have_posts() ) : $query->the_post(); ?>
		<?php
			$ID = $post->ID;
			$title = get_the_title();
			$description = get_the_excerpt();
			$company = get_the_post_thumbnail_url();
			$location = wp_get_post_terms($ID,'places')[0]->name;
			$skills = wp_get_post_terms($ID,'skills');
			$skillsIcons = skillsListIcon($skills);
		?>
			<div class="vacancy__column">
				<div class="vacancy__item">
					<div class="vacancy__column__header">
						<div class="vacancy__column_title"><?= $title ?></div>
						<!-- /.vacancy__column_title -->
						<div class="vacancy__column_brand">
							<?php if(!empty($company)) : ?>
								<img src="<?= $company ?>" alt="Фото компании" width="120" height="51" loading="lazy">
							<?php endif; ?>
						</div>
						<!-- /.vacancy__column_brand -->
					</div>
					<!-- /.vacancy__column__header -->
					<div class="vacancy__column_main"><?= $description ?></div>
					<!-- /.vacancy__column_main -->
					<div class="vacancy__column_bottom">
						<div class="vacancy__column_place"><?= $location ?></div>
						<!-- /.vacancy__column_place -->
						<div class="vacancy__column_row">
							<?= $skillsIcons ?>
							<!-- /.vacancy__column_icon -->
						</div>
						<!-- /.vacancy__column_row -->
					</div>
					<!-- /.vacancy__column_bottom -->
				</div>
				<!-- /.vacancy__item -->
			</div>
			<!-- /.vacancy__column -->
		<?php endwhile; ?>
		<!-- конец цикла -->

		<!-- пагинация -->

		<?php wp_reset_postdata(); ?>

	<?php else : ?>
		<p><?php esc_html_e( 'Нет постов по вашим критериям.' ); ?></p>
	<?php endif; ?>


	</div>
	<!-- /.vacancy__row -->
</div>
<!-- /.vacancy__wrapper -->
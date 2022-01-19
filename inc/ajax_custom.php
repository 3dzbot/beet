<?php

add_action('init', 'ajax_function_init');

function ajax_function_init(){

	add_action('wp_ajax_search_ajax', 'search_ajax_callback');
	add_action('wp_ajax_nopriv_search_ajax', 'search_ajax_callback');

	add_action('wp_ajax_find_vacancy', 'find_vacancy');
	add_action('wp_ajax_nopriv_find_vacancy', 'find_vacancy');
}

function search_ajax_callback(){

	$search = sanitize_text_field($_POST['s']);
	$post = $_POST;
	$places = !empty($_POST['places']) ? $_POST['places'] : array();
	$skills = !empty($_POST['skills']) ? $_POST['skills'] : array();

	$html   = null;

	$args = [
		'posts_per_page'    => 10,
		'orderby'           => 'date',
		'order'             => 'DESC',
		'post_status'       => 'publish',
		'post_type'         => ['vacances'],
		's'                 => $search,
		'tax_query' => array(
			array(
				'taxonomy' => 'places',
				'field'    => 'slug',
				'terms'    => $places,
				'operator' => 'AND'
			),
			array(
				'taxonomy' => 'skills',
				'field'    => 'slug',
				'terms'    => $skills,
				'operator' => 'AND'
			)
		)
	];

	$loop = new WP_Query( $args );

	$arr_location = [];
	$result = [];

	if ( $loop->have_posts() ) :

		while ( $loop->have_posts() ) : $loop->the_post();
			global $product;
			$ID = get_the_ID();
			$skills = wp_get_post_terms($ID,'skills');
			$obj = [];
			$obj['ID'] = $ID;
			$obj['title'] = get_the_title();
			$obj['description'] = get_the_excerpt();
			$obj['company'] = get_the_post_thumbnail_url();
			$location = wp_get_post_terms($ID,'places')[0]->name;
			$obj['location'] = $location;
			$obj['skills'] = $skills;
			$obj['skillsIcons'] = skillsListIcon($skills);
			$vacancyArr[] = $obj;
			$arr_location[] = $location;
		endwhile;

		$arr_location = array_unique($arr_location, SORT_STRING);
		$result = ['vacancy' => $vacancyArr, 'location' => $arr_location];
		wp_reset_postdata();
	else:
		$html = '<div class="empty">' . __( 'No products found', 'kabare' ) . '</div>';
	endif;

	wp_send_json_success(['result' => $result, 'post' => $post, 'html' => $html]);
	wp_die();
}

/*
 * ajax
 */

function find_vacancy() {
	$termSlug = $_GET['slug'];
	$vacancyArr = [];

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

	 if ( $query->have_posts() ) :
		 $arr_location = [];

	 	while ( $query->have_posts() ) : $query->the_post();

		$ID = get_the_ID();
		$skills = wp_get_post_terms($ID,'skills');
		$obj = [];
		$obj['ID'] = $ID;
		$obj['title'] = get_the_title();
		$obj['description'] = get_the_excerpt();
		$obj['company'] = get_the_post_thumbnail_url();
		$location = wp_get_post_terms($ID,'places')[0]->name;
		$obj['location'] = $location;
		$obj['skills'] = $skills;
		$obj['skillsIcons'] = skillsListIcon($skills);
		$vacancyArr[] = $obj;
		$arr_location[] = $location;

		endwhile;
		$arr_location = array_unique($arr_location, SORT_STRING);
		$result = ['vacancy' => $vacancyArr, 'location' => $arr_location];

		wp_reset_postdata();

		else : ?>
		<p><?php esc_html_e( 'Нет постов по вашим критериям.' ); ?></p>
	<?php endif;

	echo json_encode($result);

	wp_die();
}

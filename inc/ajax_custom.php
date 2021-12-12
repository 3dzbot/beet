<?php

add_action('init', 'ajax_function_init');

function showSome() {
	echo "hello from some function";
}

function ajax_function_init(){

	add_action('wp_ajax_search_ajax', 'search_ajax_callback');
	add_action('wp_ajax_nopriv_search_ajax', 'search_ajax_callback');

	add_action('wp_ajax_find_vacancy', 'find_vacancy');
	add_action('wp_ajax_nopriv_find_vacancy', 'find_vacancy');
}

function search_ajax_callback(){

	$search = sanitize_text_field($_POST['s']);
	$html   = null;

	$args = [
		'posts_per_page'    => 10,
		'orderby'           => 'date',
		'order'             => 'DESC',
		'post_status'       => 'publish',
		'post_type'         => ['vacances'],
		's'                 => $search
	];

	if( $search ) :

		$loop = new WP_Query( $args );

		if ( $loop->have_posts() ) :
			$html = '<ul>';
			while ( $loop->have_posts() ) : $loop->the_post();
				global $product;

				$html .= '<li>';
				$html .= '<a href="' . get_the_permalink() . '">';
//				$html .= '<div class="image"><img src="' . kama_thumb_src('w=45 &h=45') . '" /></div>';
				$html .= '<div class="box">';
				$html .= '<div class="title">' . get_the_title() . '</div>';
//				$html .= '<div class="price">' . (number_format($product->get_regular_price(), 2, '.', ' ') . ' ' . get_woocommerce_currency_symbol( 'UAH' )) . '</div>';
				$html .= '</div>';
				$html .= '</a>';
				$html .= '</li>';

			endwhile;
			$html .= '</ul>';
			wp_reset_postdata();
		else:

			$html = '<div class="empty">' . __( 'No products found', 'kabare' ) . '</div>';

		endif;

	endif;

	wp_send_json_success(['html' => $html]);
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


	 	while ( $query->have_posts() ) : $query->the_post();

		$ID = get_the_ID();
		$skills = wp_get_post_terms($ID,'skills');
		$obj = [];
		$obj['ID'] = $ID;
		$obj['title'] = get_the_title();
		$obj['description'] = get_the_excerpt();
		$obj['company'] = get_the_post_thumbnail_url();
		$obj['location'] = wp_get_post_terms($ID,'places')[0]->name;
		$obj['skills'] = $skills;
		$obj['skillsIcons'] = skillsListIcon($skills);
		$vacancyArr[] = $obj;

		endwhile;

		wp_reset_postdata();

		else : ?>
		<p><?php esc_html_e( 'Нет постов по вашим критериям.' ); ?></p>
	<?php endif;
//	echo json_encode($vacancyArr, JSON_UNESCAPED_UNICODE);
	echo json_encode($vacancyArr);
	wp_die();
}

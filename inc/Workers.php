<?php

class Workers {

	public function __construct() {
		ajax_function_init();
	}

	public function ajax_function_init(){

		/**
		 * Search
		 */
		add_action('wp_ajax_search_ajax', 'search_ajax_callback');
		add_action('wp_ajax_nopriv_search_ajax', 'search_ajax_callback');

		add_action('wp_ajax_hello', 'find_vacancy');
		add_action('wp_ajax_nopriv_hello', 'find_vacancy');

	}

	public static function search_ajax_callback(){

		$search = sanitize_text_field($_POST['s']);
		$html   = null;

		$args = [
			'posts_per_page'    => 20,
			'orderby'           => 'date',
			'order'             => 'DESC',
			'post_status'       => 'publish',
			'post_type'         => ['product'],
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
					$html .= '<div class="image"><img src="' . kama_thumb_src('w=45 &h=45') . '" /></div>';
					$html .= '<div class="box">';
					$html .= '<div class="title">' . get_the_title() . '</div>';
					$html .= '<div class="price">' . (number_format($product->get_regular_price(), 2, '.', ' ') . ' ' . get_woocommerce_currency_symbol( 'UAH' )) . '</div>';
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
}

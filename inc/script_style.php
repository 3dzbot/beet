<?php
/**
 * Enqueue scripts and styles.
 */
function beet_enqueue_assets()
{
	wp_enqueue_style('beet-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.min.css', array(), _S_VERSION);
//	wp_style_add_data('style', 'rtl', 'replace');

	wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.min.js', array(), _S_VERSION, true);
	/*

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}

	if (is_product()) {
		wp_enqueue_style('single-product', get_template_directory_uri() . '/assets/css/single-product.css', array(), _S_VERSION);
		wp_enqueue_script('single-product', get_template_directory_uri() . '/assets/js/single-product.js', array(), _S_VERSION, true);
	}

	if (is_archive()) {
		wp_enqueue_style('single-product', get_template_directory_uri() . '/assets/css/single-product.css', array(), _S_VERSION);
		wp_enqueue_script('single-product', get_template_directory_uri() . '/assets/js/single-product.js', array(), _S_VERSION, true);
	}

	if (is_product_category() || is_shop() || is_search()) {
		wp_enqueue_style('products', get_template_directory_uri() . '/assets/css/products.css', array(), _S_VERSION);
		wp_enqueue_script('products', get_template_directory_uri() . '/assets/js/products.js', array(), _S_VERSION, false);
	}
	*/
}

add_action('wp_enqueue_scripts', 'beet_enqueue_assets');
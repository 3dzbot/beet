<?php

//wp_enqueue_style('front-page', get_template_directory_uri() . '/assets/css/front-page.min.css', array(), _S_VERSION);
//wp_enqueue_script('front-page', get_template_directory_uri() . '/assets/js/front-page.min.js', array(), _S_VERSION, true);

get_header();

while ( have_posts() ) :

	the_post();
	/*
	 * Home: hero
	 */
	get_template_part('template-parts/pages/home/hero', '');

	/*
	 * Home: bottom
	 */
	get_template_part('template-parts/pages/home/bottom', '');

endwhile; // End of the loop.

get_footer();
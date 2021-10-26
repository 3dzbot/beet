<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Beet
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site_header d_flex align_items_center">

	<div class="container">
		<div class="logo <?php if(is_front_page()) echo 'logo__front'; ?>">
			<?php the_custom_logo(); ?>
		</div>
		<!-- /.logo -->

		<nav class="nav nav__main_menu">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'main_menu',
					'container'       => false,
					'menu_class'      => 'header_main_menu d_flex align_items_center',
				)
			);

			?>
		</nav>
		<!-- #site-navigation -->

		<button class="button header__button">Job Openings</button>
	</div>
	<!-- /.container -->
</header><!-- #masthead -->

<div class="main_wrapper">
	<main>

<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Beet
 */

?>
	</main>
</div>
<!-- /.main_wrapper -->

<footer id="colophon" class="site_footer">
	<div class="container">
		<div class="site_footer__row">
			<div class="site_footer__column">
				<div class="site_footer__item">
					<h3 class="site_footer__column_title">Beetroot</h3>
					<ul class="site_footer__nav_list">
						<li><a href="#">Teams</a></li>
						<li><a href="#">Projects</a></li>
						<li><a href="#">Academy</a></li>
					</ul>
				</div>
				<!-- /.site_footer__item -->
				<div class="site_footer__item">
					<h3 class="site_footer__column_title">Company</h3>
					<ul class="site_footer__nav_list">
						<li><a href="#">What we do</a></li>
						<li><a href="#">Why us</a></li>
						<li><a href="#">Career</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
				<!-- /.site_footer__item -->
				<div class="site_footer__item">
					<h3 class="site_footer__column_title transparent">About</h3>
					<ul class="site_footer__nav_list">
						<li><a href="#">Portfolio</a></li>
						<li><a href="#">Testimonials</a></li>
						<li><a href="#">Magazine</a></li>
						<li><a href="#">Newsroom</a></li>
					</ul>
				</div>
				<!-- /.site_footer__item -->
			</div>
			<!-- /.site_footer__column -->

			<div class="site_footer__column">
				<ul class="footer__socials">
					<li><a href="#" aria-label="facebook link"></a></li>
					<li><a href="#" aria-label="twitter link"></a></li>
					<li><a href="#" aria-label="linkedin link"></a></li>
					<li><a href="#" aria-label="instagram link"></a></li>
				</ul>
				<form action="" class="footer__subscribe">
					<fieldset>
						<legend>subscribe to news</legend>
						<input type="email" name="email" placeholder="Email Address">
						<button>Ok</button>
					</fieldset>
				</form>
			</div>
			<!-- /.site_footer__column -->
		</div>
		<!-- /.site_footer__row -->
	</div>
	<!-- /.container -->
</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>

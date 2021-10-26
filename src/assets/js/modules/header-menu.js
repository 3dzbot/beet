import calcScrollWidth from '../inc/calcScrollWidth';

const headerMenu = () => {
	if (window.outerWidth <= 991) {
		document.querySelector('.site-main').style.paddingTop = document.querySelector('.mobile_top_menu').scrollHeight + 'px';
	}

	const mobMenuTrigger = document.querySelector('.mobile_menu_open');
	const mobMenu = document.querySelector('.mobile_menu');

	mobMenuTrigger.addEventListener('click', function() {
		this.classList.toggle('active');
		if (this.classList.contains('active')) {
			mobMenu.classList.add('active');
			let scroll = calcScrollWidth();

			document.body.style.overflow = 'hidden';

			return;
		}
		mobMenu.classList.remove('active');

		document.body.style.overflow = null;

	});

	window.addEventListener('resize', () => {
		if (window.outerWidth <= 991) {
			if(!mobMenu.classList.contains('active')) {
				document.querySelector('.site-main').style.paddingTop = document.querySelector('.mobile_top_menu').scrollHeight + 'px';
			}
			return;
		}
		document.body.style.overflow = null;
		document.querySelector('.site-main').style.paddingTop = null;
		mobMenuTrigger.classList.remove('active');
		mobMenu.classList.remove('active');
	})

}

export default headerMenu;
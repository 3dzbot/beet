import IMask from 'imask';
import accordion from './modules/accordion-footer';
import showMoreText from './modules/show-more-text';
import headerMenu from './modules/header-menu';


document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	let telInputEls = document.querySelectorAll('.phone_mask');
	let numInputEls = document.querySelectorAll('.num_mask');
	let maskOptions = {
		mask: '+{38} (000) 000-00-00'
	};

	if (telInputEls) {
		telInputEls.forEach(el => {
			IMask(el, maskOptions);
		})
	}

	if (numInputEls) {
		numInputEls.forEach(el => {
			IMask(el, {
				mask: 'num',
				blocks: {
					num: {
						mask: Number,
						thousandsSeparator: ' ',
						min: 0,
						max: 10000000000,
					}
				}
			});
		})
	}

	const scrollTopBtn = document.querySelectorAll('.up-btn');
	scrollTopBtn.forEach(el => {
		el.addEventListener('click', () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		})
	})

	accordion('.middle_top .item');

	showMoreText(450, '.review_text_footer', {innerText: true, addClasses: ["inner-text", "white"]});

	headerMenu();

});
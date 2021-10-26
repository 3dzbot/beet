import Swiper from 'swiper/bundle';
import SwiperCore, {
	Pagination,Navigation
} from 'swiper';

import actionScroll from './modules/action-scroll';
import animCount from './modules/animated-count';
import calculator from './modules/calculator-form';
import tabs from './modules/tabs';
import showMoreText from './modules/show-more-text';

document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	actionScroll('.achievements_number', () => { animCount('.achievements_number_info .count', {}) });

	calculator('form.calculator_form');

	tabs('tab1');

	showMoreText(450, '.review_text', {innerText: true, addClasses: ["inner-text", "white"]});

	SwiperCore.use([Pagination,Navigation]);

	const swiper = new Swiper(".recentlySwiper", {
		slidesPerView: 2,
		spaceBetween: 0,
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 35,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const clientSwiper = new Swiper(".clientSwiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		allowTouchMove: true,
		keyboard: {
			enabled: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: "auto",
				centeredSlides: true,
			},
			576: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const newsSwiper = new Swiper(".news-swiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		keyboard: {
			enabled: true,
		},
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				centeredSlides: true,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	})
});
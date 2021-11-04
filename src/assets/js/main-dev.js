import IMask from 'imask';
import accordion from './modules/accordion-footer';
import showMoreText from './modules/show-more-text';
import headerMenu from './modules/header-menu';


document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	let ajaxBtnList = document.querySelector('.vacancy__header_list');
	let vacancySwitcher = document.querySelectorAll('.vacancy_switcher button');

	vacancySwitcher.forEach(btn => {
		btn.addEventListener('click', switcherColumns)
	})

	function switcherColumns(e) {
		const btn = e.target.closest('button');
		if(btn.classList.contains('active')) return;
		const vacancyRow = document.querySelector('.vacancy__row');
		vacancySwitcher.forEach(item=>item.classList.remove('active'));
		btn.classList.add('active');
		vacancyRow.classList.toggle('active');
	}

	ajaxBtnList.addEventListener('click', checkBtn);

	function checkBtn(e) {
		const target = e.target;
		if(target.tagName === 'BUTTON') {
			ajaxSend(target);
			return
		} else if (target.parentNode.tagName === 'BUTTON') {
			ajaxSend(target.parentNode);
			return
		}
	}
	function ajaxSend(btn) {
		let slug = btn.dataset.filter;
		let url = beet_ajax.ajaxurl + `/?action=hello&slug=${slug}`;

		fetch(url)
		 .then(data => data.json())
		 .then(data => createVacancyCard(data, btn))
	}

	function createVacancyCard(arr, btn) {

		ajaxBtnList.querySelectorAll('li').forEach(item => item.classList.remove('active'));

		let vacancyRow = document.querySelector('.vacancy__row');
		vacancyRow.textContent = '';

		arr.forEach(item => {
			let company = item['company'] ? `<img src="${item['company']}" alt="Фото компании" width="120" height="51" loading="lazy">` : '';
			let description = item['description'];
			let skillsIcons = item['skillsIcons'];
			let title = item['title'];
			let location = item['location'] ? `<span>${item['location']}</span>` : '';

			let card = document.createElement('div');
			card.classList.add('vacancy__column');

			card.innerHTML = `
				<div class="vacancy__item">
					<div class="vacancy__column__header">
 						<div class="vacancy__column_title">${title}</div>
 						<!-- /.vacancy__column_title -->
 						<div class="vacancy__column_brand">
 						${company}
 						</div>
 					</div>
 					<div class="vacancy__column_main">${description}</div>
 					<div class="vacancy__column_bottom">
 						<div class="vacancy__column_place"><a href="#">Details</a>${location}</div>
 						<div class="vacancy__column_row">
 						${skillsIcons}
 						</div>
 					</div>
 				</div>
			`;

			vacancyRow.append(card);

			btn.closest('li').classList.add('active');
		})
	}
});
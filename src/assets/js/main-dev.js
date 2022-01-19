import ajaxModule from './modules/ajax';
import search from './modules/search';
import createVacancyCard from './modules/createCards';


document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	ajaxModule();
	search();

	const btnSkillList = document.querySelectorAll('.vacancy__header_list li button');
	const search_form__column_header = document.querySelectorAll('.search_form__column_header');
	let vacancySwitcher = document.querySelectorAll('.vacancy_switcher button');

	vacancySwitcher.forEach(btn => {
		btn.addEventListener('click', switcherColumns)
	})

	search_form__column_header.forEach(item => {
		item.addEventListener('click', toggleSearchWrap);

	})

	function toggleSearchWrap(e) {
		const target = e.currentTarget;
		const wrap = target.nextElementSibling;

		const parent = target.closest('.search_form__column');

		if(parent.classList.contains('active')){
			parent.classList.remove('active');
			wrap.style.maxHeight = null;
		} else {
			parent.classList.add('active');
			wrap.style.maxHeight = wrap.scrollHeight + "px";
		}
	}

	function switcherColumns(e) {
		const btn = e.target.closest('button');
		if(btn.classList.contains('active')) return;
		const vacancyRow = document.querySelector('.vacancy__row');
		vacancySwitcher.forEach(item=>item.classList.remove('active'));
		btn.classList.add('active');
		vacancyRow.classList.toggle('active');
	}

	btnSkillList.forEach(btn => {
		btn.addEventListener('click', ajaxSend)
	})

	function ajaxSend(e) {
		const btn = e.currentTarget;
		let slug = btn.dataset.filter;
		let url = beet_ajax.ajaxurl + `/?action=find_vacancy&slug=${slug}`;

		fetch(url)
		 .then(data => data.json())
		 .then(data => createVacancyCard(data.vacancy, btn))
	}
});
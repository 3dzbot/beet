import ajaxModule from './modules/ajax';
import search from './modules/search';
import createVacancyCard from './modules/createCards';


document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	ajaxModule();
	search();

	const btnSkillList = document.querySelectorAll('.vacancy__header_list li button');
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

	btnSkillList.forEach(btn => {
		btn.addEventListener('click', ajaxSend)
	})

	function ajaxSend(e) {
		const btn = e.currentTarget;
		let slug = btn.dataset.filter;
		let url = beet_ajax.ajaxurl + `/?action=find_vacancy&slug=${slug}`;

		fetch(url)
		 .then(data => data.json())
		 .then(data => createVacancyCard(data, btn));
	}
});
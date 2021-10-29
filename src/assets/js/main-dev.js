import IMask from 'imask';
import accordion from './modules/accordion-footer';
import showMoreText from './modules/show-more-text';
import headerMenu from './modules/header-menu';


document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	let ajaxBtnList = document.querySelector('.vacancy__header_list');

	// ajaxBtnList.addEventListener('click', checkBtn);

	// function checkBtn(e) {
	// 	const target = e.target;
	// 	if(target.tagName === 'BUTTON') {
	// 		ajaxSend(target);
	// 		return
	// 	} else if (target.parentNode.tagName === 'BUTTON') {
	// 		ajaxSend(target.parentNode);
	// 		return
	// 	}
	// }

	// function ajaxSend(btn) {
	// 	console.log(btn);
	// 	let url = beet_ajax.ajaxurl;
	// 	let data = {
	// 		action: 'hello',
	// 	};
	// 	// fetch()
	// 	//  .then(console.log(data))
	// 	fetch(url)
	// 	 .then(res => res.text())
	// 	 .then(res => console.log(res));
	// 	 // .catch(() => console.log('ошибка'));
	//
	//
	// 	return;
	//
	// 	let obj = {
	// 		action: 'hello',
	// 	}
	// 	getResource(url, obj)
	// 	 .then(data => console.log(data))
	// 	 .catch(err => console.error(err));
	// }
	//
	// async function getResource(url, data) {
	// 	const res = await fetch(`${url}`, {
	// 		method: "POST",
	// 		headers:{"content-type": "application/x-www-form-urlencoded"},
	// 		body: {
	// 			action: 'hello',
	// 		}
	// 	});
	//
	// 	if(!res.ok) {
	// 		throw new Error (`Could not fetch ${url}, status: ${res.status}`)
	// 	}
	// 	// return await res.json();
	// 	return res;
	// }



});
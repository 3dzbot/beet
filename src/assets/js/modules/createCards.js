const createVacancyCard = (arr, btn = null) => {

	const ajaxHeaderList = document.querySelector('.vacancy__header_list');
	ajaxHeaderList.querySelectorAll('li').forEach(item => item.classList.remove('active'));

	let vacancyRow = document.querySelector('.vacancy__row');
	vacancyRow.textContent = '';

	try {
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

			if(btn) btn.closest('li').classList.add('active');
		})
	} catch (e) {
		console.warn('empty array');
	}
}

export default createVacancyCard;
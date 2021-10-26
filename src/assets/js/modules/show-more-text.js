const showMoreText = (maxLength, changeSelector, {innerText = false, addClasses = []}) => {
	const maxTextLength = maxLength;
	const els = document.querySelectorAll(changeSelector);

	if (els && maxTextLength) {
		els.forEach(el => {
			const elParent = el.parentElement;
			const elHtml =`<p>${el.innerHTML}</p>`;
			const elText = el.textContent;
			const elTextArr = elText.split('');
			const elL = elTextArr.length;
			let newText = '';

			if (maxLength < elL) {
				newText = elTextArr.slice(0, maxLength);
				newText.push('...');
				newText = newText.join('').split(/\u00A0/g);
				el.innerHTML = '';
				newText.forEach((text, i) => {
					if (i !== newText.length - 1) {
						el.innerHTML += `<p>${text}</p></br>`;
					} else {
						el.innerHTML += `<p>${text}</p>`;
					}
				})
			}

			const showMoreBtn = document.createElement('span');
			showMoreBtn.textContent = 'Развернуть';
			showMoreBtn.classList.add(`show_more_btn`, ...addClasses);

			if (newText.length > 0) {
				showMoreBtn.addEventListener('click', () => {
					showMoreBtn.classList.toggle('active');
					if (showMoreBtn.classList.contains('active')) {
						el.innerHTML = elHtml;
						showMoreBtn.textContent = 'Свернуть';

						addHandleBtn(el, showMoreBtn);
					} else {
						el.innerHTML = '';
						newText.forEach((text, i) => {
							if (i !== newText.length - 1) {
								el.innerHTML += `<p>${text}</p></br>`;
							} else {
								el.innerHTML += `<p>${text}</p>`;
							}
						})
						showMoreBtn.textContent = 'Развернуть';

						addHandleBtn(el, showMoreBtn)
					}
				})

				if (innerText) {
					if (el.children.length > 0) {
						if (el.children.length > 1) {
							el.children[el.children.length].append(showMoreBtn);
						} else {
							el.children[0].append(showMoreBtn);
						}
					}
				} else {
					elParent.append(showMoreBtn);
				}
			}
		})

	}

	function addHandleBtn(el, showMoreBtn) {
		if (innerText) {
			if (el.children && el.children.length > 0) {
				if (el.children.length > 1) {
					el.children[el.children.length].append(showMoreBtn);
				} else {
					el.children[0].append(showMoreBtn);
				}
			} else {
				if (typeof el === 'string') {
					el.append(showMoreBtn);
				}
			}
		}
	}
};

export default showMoreText;
const accordion = (parentSelector = null) => {
	const parentEl = document.querySelectorAll('.middle_top .item');

	if (parentEl) {
		const test = document.querySelectorAll('.widget-title');

		parentEl.forEach(el => {
			test.forEach(child => {
				if (el.contains(child)) {
					const hideEl = el.querySelector('.menu');
					child.addEventListener('click', () => {
						if (window.innerWidth <= 991) {
							child.parentElement.classList.toggle('active');
							if (!child.parentElement.classList.contains('active')) {
								hideEl.style.maxHeight = null;
								hideEl.style.marginTop = null;
								hideEl.style.opacity = '0';
							} else {
								hideEl.style.maxHeight = hideEl.scrollHeight + "px";
								hideEl.style.marginTop = '20px';
								hideEl.style.opacity = '1';
							}
						}
					})
				}
			})
		})
	}
}

export default accordion;
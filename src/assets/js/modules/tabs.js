const tabs = (parentSelector) => {
	const tabItems = document.querySelectorAll('[data-tab-show]');
	const tabItemsContent = document.querySelectorAll('[data-tab-name]');

	tabItems.forEach((tabItem, i) => {
		const tabItemName = tabItem.dataset.tabShow;

		tabItem.addEventListener('click', () => {
			tabItemsContent.forEach((tabItemContent) => {
				const tabItemContentName = tabItemContent.dataset.tabName;

				if (tabItemName === tabItemContentName && !tabItem.classList.contains('active')) {
					activeClassReset();
					tabItemContent.classList.add('active');
					tabItem.classList.add('active');
				}
			})
		});
	});

	function activeClassReset() {
		tabItems.forEach(el => {
			if (el.parentElement.classList.contains(parentSelector)) {
				el.classList.remove('active');
			}
		});
		tabItemsContent.forEach(el => {
			if (el.parentElement.classList.contains(parentSelector)) {
				el.classList.remove('active');
			}
		});
	}
}

export default tabs;
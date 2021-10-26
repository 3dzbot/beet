const actionScroll = (elSelector = null, action = () => console.log('<h2>У вас нет экшена</h2>')) => {
	let elem = document.querySelector(elSelector);

	if (elem) {
		function elementInViewport2(el) {
			var top = el.offsetTop;
			var left = el.offsetLeft;
			var width = el.offsetWidth;
			var height = el.offsetHeight;

			while(el.offsetParent) {
				el = el.offsetParent;
				top += el.offsetTop;
				left += el.offsetLeft;
			}

			return (
			 top < (window.pageYOffset + window.innerHeight) &&
			 left < (window.pageXOffset + window.innerWidth) &&
			 (top + height) > window.pageYOffset &&
			 (left + width) > window.pageXOffset
			);
		}

		window.addEventListener('scroll', doAction);

		function doAction() {
			if (elementInViewport2(elem)) {
				action();
				window.removeEventListener('scroll', doAction);
			}
		}
	}

};

export default actionScroll;
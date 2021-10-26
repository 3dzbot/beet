const animCount = (elSelector, {time = 4000, step = 1}) => {
	let els = document.querySelectorAll(elSelector);

	if (els) {
		els.forEach(el => {
			let num = parseInt(el.textContent, 10);
			el.textContent = '0+';
			let n = 0;
			let t = Math.round(time / (num / step));
			let interval = setInterval(() => {
				n = (n + step);
				if (n >= num) {
					clearInterval(interval);
				}
				el.textContent = `${n}+`;
			}, t);
		})
	}
}

export default animCount;
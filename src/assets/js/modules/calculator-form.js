const calculator = (formSelector) => {
	const form = document.querySelector(formSelector);

	if (form) {
		form.addEventListener('submit', formHandler);
	}

	function formHandler(e) {
		e.preventDefault();

		if (e.target.nodeName === 'FORM') {
			const elements = document.forms['calculator_form'].elements;
			const data = {};
			for (let i = 0; i < elements.length; i++) {
				let itm = elements.item(i);
				itm.name ? data[itm.name] = itm.value : null;
			}
			document.forms['calculator_form'].reset();
			console.log(data);
		}
	}
}

export default calculator;
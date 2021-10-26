const map = () => {
	const googleMapValue = document.getElementById('google-map-value');

	if(googleMapValue){
		let mapContainer = document.getElementById('map-google'),
		 map;

		const script = document.createElement('script');
		const googleKey = 'AIzaSyA6y2q61FgjiSPRgtJdGGPM0aqyACQW-7Y';
		script.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}`;
		script.defer = true;

		// Append the 'script' element to 'head'
		document.head.appendChild(script);

		function isElementInViewport (el) {
			let top = el.offsetTop;
			let height = el.offsetHeight;

			while(el.offsetParent) {
				el = el.offsetParent;
				top += el.offsetTop;
			}

			return (
			 top < (window.pageYOffset + window.innerHeight) &&
			 (top + height) > window.pageYOffset
			);
		}

		googleMapValue.addEventListener('change', initMap)

		//отрисовываем гугл-карту
		function initMap() {
			let addressArray = googleMapValue.dataset.value.split('|');
			let latMap = +addressArray[0];
			let lngMap = +addressArray[1];
			let zoomMap = addressArray[2] ? +addressArray[2] : 18;
			// let image = document.querySelector('.map-wrapper img');
			// if(image){image.remove();}

			map = new google.maps.Map(document.getElementById('map-google'), {
				// При создании объекта карты необходимо указать его свойства
				// center - определяем точку на которой карта будет центрироваться
				// center: {lat: 46.49213911699637, lng: 30.7127845287323},
				center: {lat: latMap, lng: lngMap},
				// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
				zoom: zoomMap,
				disableDefaultUI: true
			});
			// Создаем маркеров на карте
			let marker = new google.maps.Marker({

				// Определяем позицию маркера 46.460123,30.5717039
				position: {lat: latMap, lng: lngMap},

				// Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
				map: map,

				// Пишем название маркера - появится если навести на него курсор и немного подождать
				// title: 'Vedanta, Одеса, Одеська область, Украина, 65000',

				// Укажем свою иконку для маркера
				// icon: 'https://lp.vedanta-auto.com.ua//wp-content/themes/vedanta/assets/css/images/map-marker.svg'
			});
		}

		//проверяем отрисовали карту или нет
		function checkInitMap() {
			if(!mapContainer.classList.contains('map-init')) {
				mapContainer.classList.add('map-init');
				setTimeout(initMap, 1000);
			}
		}

		window.addEventListener('scroll', checkVisibleMap);

		//проверяем попал блок карты в область видимости
		function checkVisibleMap(){
			if(isElementInViewport(mapContainer)){
				checkInitMap();
				window.removeEventListener('scroll', checkVisibleMap);
			}
		}

		checkVisibleMap();
	}
}

export default map;
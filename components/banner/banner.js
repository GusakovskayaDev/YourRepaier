
const htmlContent_banner = `
	<img src="src/banner.jpg" alt="">
	<div>
		<p>Исчерпывающий комплекс услуг</p>
		<h1 class="h1__white">Профессиональный ремонт квартир</h1>
		<button id="buttonPopup" class="buttonYellow">Расчитать стоимость &#8594;</button>
	</div>
`;

document.getElementById("banner").innerHTML = htmlContent_banner;

const button = document.getElementById('buttonPopup');
const container = document.getElementById('getPopup');
const popup = 'components/popup/popup.html';

button.addEventListener('click', () => {
	fetch(popup)
	.then(response => response.text())
	.then(text => container.innerHTML = text)
});

// const closePopup = document.querySelector('.closePopup');
// closePopup.addEventListener('click', () => {
// 	console.log('ss');
// });

// const popup = document.querySelector('.popup');
// button.addEventListener('click', () => {
// 	popup.classList.add("display: block");
// })

// const popup2LV = document.querySelector('.popup__2lvl');

// container.addEventListener('click', (e) => {
// 	if(container.contains(e.target)){
// 		console.log(e.target);
// 	}
// });

// if (!popup.contains(event.target) && !popup.classList.contains("hidden")) {
// 	closePopup();
// }
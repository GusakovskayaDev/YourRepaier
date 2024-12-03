const htmlContent_header = `
<section class="logo">
			<div>
				<img src="src/logo.png" alt="">
			</div>
			<div>
				<p class="title__logo">YourRepairer</p>
				<p class="logo__desc">Ремонт и отделка квартир и помещений</p>
			</div>
		</section>
		<section class="menu">
			<nav id="primary_nav_wrap">
				<ul class="first__level">
					<li>
						<a href="#banner">Главная</a>
					</li>
					<li>
						<!-- <button class="btn_item js__btn__item" aria-expanded="false">О нас &dharr;</button> -->
						<a href="">О нас &dharr;</a>
						<ul>
							<li>
								<a href="#reviews">Отзывы</a>
							</li>
							<li>
								<a href="#article">Полезные статьи</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#services">Услуги</a>
					</li>
					<li>
						<a href="#advertisement">Акции</a>
					</li>
					<li>
						<a href="#services">Цены</a>
					</li>
					<li>
						<a href="#contacts">Контакты</a>
					</li>
				</ul>
			</nav>
		</section>
		<section class="phone">
			<i class="fa-solid fa-phone"></i>
			<a href="">+7-921-273-45-45</a>
		</section>
`;

document.getElementById("header").innerHTML = htmlContent_header;

{/* <ul>
<li>
	<a href="">Косметический ремонт</a>
</li>
<li>
	<a href="">Капитальный ремонт</a>
</li>
<li>
	<a href="">Ремонт "Под ключ"</a>
</li>
<li>
	<a href="">Элитный ремонт</a>
</li>
<li>
	<a href="">Комплексный ремонт</a>
</li>
<li>
	<a href="">Евроремонт</a>
</li>
</ul> */}

//  <div id="component_phoneNumber"></div> 
// const file = 'components/header/phoneNumber.js';
// getComponent(file);

// function getComponent(url) {
// 	fetch(url)
// 	.then(response => response.text())
// 	.then(text => document.getElementById("component_phoneNumber").innerHTML = text)
// }

// async function getComponent(url) {
// 	try {
// 		const response = await fetch(url);
// 		const text = await response.text();
// 		return text; 
// 	} catch (error) {
// 		console.error('Ошибка при получении данных:', error);
// 	}
// }
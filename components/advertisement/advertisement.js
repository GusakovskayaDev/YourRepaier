
const htmlContent_advertisement = `
	<div class="container itemServices">
		<div class="itemServices__leftSide">
			<p class="itemServices__desc">Мы предоставляем исчерпывающий комплекс услуг со скидкой</p>
			<h1 class="h1__white">Ремонт любой сложности</h1>
			<div class="container__carousel">
				<div class="item__carousel">
					<img src="src/wall.svg" alt="">
					<p class="carouselTitle">Ремонт стен</p>
					<p class="carouselDesc">От<span class="carouselSpan">14 650</span>руб.</p>
					<button class="buttonYellow">Подробнее &#8594;</button>
				</div>
				<div class="item__carousel">
					<img src="src/wall.svg" alt="">
					<p class="carouselTitle">Ремонт стен</p>
					<p class="carouselDesc">От<span class="carouselSpan">14 650</span>руб.</p>
					<button class="buttonYellow">Подробнее &#8594;</button>
				</div>
				<div class="item__carousel">
					<img src="src/wall.svg" alt="">
					<p class="carouselTitle">Ремонт стен</p>
					<p class="carouselDesc">От<span class="carouselSpan">14 650</span>руб.</p>
					<button class="buttonYellow">Подробнее &#8594;</button>
				</div>
			</div>
			<button class="buttonYellowBorder">Все акции</button>
		</div>
		<div class="itemServices__rightSide">
			<div class="whiteSale">
				<p class="saleTitle">-10% на все виды ремонта</p>
				<img id="rightSide__img" src="src/img5.jpg" alt="">
				<p id="saleDesc">Обновление внешнего вида помещения</p>
				<p id="whiteSale__Price">От<span id="whiteSale__Span">14 650</span>руб.</p>
				<button class="buttonYellowBorder btn__whiteSale">Заказать по акции</button>
			</div>
		</div>
	</div>
`;

document.getElementById("advertisement").innerHTML = htmlContent_advertisement;
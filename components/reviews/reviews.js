
const htmlContent_reviews = `
	<div class="allContainer" style="background-color: rgb(245, 245, 245);">
		<div class="feedback">
			<p>Галерея</p>
			<h1>Отзывы наших клиентов</h1>
			<div class="allFeedbacks">
				<div class="itemFeedback">
					<div class="upper__unit">
						<img src="src/people1.jpg" alt="">
						<!-- <img src="" alt=""> -->
						<img class="quotes" src="src/quotes.png" alt="">
					</div>
					<p class="feedback__title">
						Валерий
					</p>
					<p class="feedback__desc">
						Хотелось бы поблагодарить команду за столь ответственное отношение к работе - все сделали даже раньше назначенного срока, учли все пожелания, и по семейному бюджету ремонт в итоге ударил не так сильно, как если бы мы решились делать его сами. Большое спасибо! Очень довольны!
					</p>
				</div>
				<div class="itemFeedback">
					<div class="upper__unit">
						<img src="src/people1.jpg" alt="">
						<!-- <img src="" alt=""> -->
						<img class="quotes" src="src/quotes.png" alt="">
					</div>
					<p class="feedback__title">
						Валерий
					</p>
					<p class="feedback__desc">
						Хотелось бы поблагодарить команду за столь ответственное отношение к работе - все сделали даже раньше назначенного срока, учли все пожелания, и по семейному бюджету ремонт в итоге ударил не так сильно, как если бы мы решились делать его сами. Большое спасибо! Очень довольны!
					</p>
				</div>
			</div>
			<div class="feedback__navigation">
				<div>
					&#8592;
				</div>
				<div>
					&#x2026;
				</div>
				<div>
					&#8594;
				</div>
			</div>
			<div class="feedback__button">
				<button>Все отзывы</button>
			</div>
		</div>
	</div>
`;

document.getElementById("reviews").innerHTML = htmlContent_reviews;
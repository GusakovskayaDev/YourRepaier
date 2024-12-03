
const htmlContent_form = `
<div class="block__form">
		<div class="leftSide__form">
			<div class="form">
				<p id="form__title">Оставить заявку</p>
				<p>Имя:</p>
				<input type="text">
				<p>Телефон: <span>*</span></p>
				<input type="text">
				<p>Комментарии:</p>
				<input type="text">
				<div class="checkbox__margin">
					<input type="checkbox" id="myCheck" name="myCheck">
					<label for="myCheck">
					Я согласен(а) с обработкой <a href="">персональных данных *</a>
					</label>
				</div>
				<div>
						<button>Отправить</button>
				</div>
			</div>
		</div>
		<div class="rightSide__form">
			<div>
				<h1 class="rightSide__form__title">Как мы работаем</h1>
				<p class="rightSide__form__desc">4 шага для получения результата</p>
				<div class="stepsBlock">
					<div class="blockItemStep">
						<div>
							<p class="titleNumber">01</p>
						</div>
						<div class="itemStep__flex">
							<p class="itemStepTitle">Вы оставляете заявку</p>
							<p class="itemStepDesc">Напишите нам письмо прямо на сайте или позвоните по телефону 8 (000) 000-00-00</p>
						</div>
					</div>
					<div class="blockItemStep">
						<div>
							<p class="titleNumber">02</p>
						</div>
						<div class="itemStep__flex">
							<p class="itemStepTitle">Вы оставляете заявку</p>
							<p class="itemStepDesc">Напишите нам письмо прямо на сайте или позвоните по телефону 8 (000) 000-00-00</p>
						</div>
					</div>
					<div class="blockItemStep">
						<div>
							<p class="titleNumber">03</p>
						</div>
						<div class="itemStep__flex">
							<p class="itemStepTitle">Вы оставляете заявку</p>
							<p class="itemStepDesc">Напишите нам письмо прямо на сайте или позвоните по телефону 8 (000) 000-00-00</p>
						</div>
					</div>
					<div class="blockItemStep">
						<div>
							<p class="titleNumber">04</p>
						</div>
						<div class="itemStep__flex">
							<p class="itemStepTitle">Вы оставляете заявку</p>
							<p class="itemStepDesc">Напишите нам письмо прямо на сайте или позвоните по телефону 8 (000) 000-00-00</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

document.getElementById("form").innerHTML = htmlContent_form;
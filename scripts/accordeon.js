// Пример JSON данных
const servicesData = [
  { id: 1, name: "Услуга 1" },
  { id: 2, name: "Услуга 2" },
  { id: 3, name: "Услуга 3" },
  { id: 4, name: "Услуга 4" },
  { id: 5, name: "Услуга 5" },
  { id: 6, name: "Услуга 6" }
];

function loadServices() {
  const servicesContainer = document.getElementById("servicesContainer");

  servicesData.forEach((service, index) => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");
    serviceCard.textContent = service.name;

    // Скрываем все карточки, начиная с пятой
    if (index >= 4) {
      serviceCard.classList.add("hidden");
    }

    servicesContainer.appendChild(serviceCard);
  });
}

let isExpanded = false;

function toggleServices() {
  const hiddenCards = document.querySelectorAll(".service-card.hidden");

  if (isExpanded) {
    // Скрыть карточки и обновить текст кнопки
    hiddenCards.forEach(card => card.classList.add("hidden"));
    document.getElementById("toggleButton").textContent = "Показать еще";
  } else {
    // Показать карточки и обновить текст кнопки
    hiddenCards.forEach(card => card.classList.remove("hidden"));
    document.getElementById("toggleButton").textContent = "Скрыть";
  }

  isExpanded = !isExpanded;
}

// Запускаем функцию загрузки при загрузке страницы
window.onload = loadServices;

export { openModal, closeModal };

// // // функция открытия модального окна
function openModal(popup) {
  // Добавление класса с анимацией
  popup.classList.add("popup_is-animated");

  // Задержка перед добавлением класса открытия
  setTimeout(function () {
    // Добавление класса для открытия модального окна
    popup.classList.add("popup_is-opened");

    // Слушатель для закрытия по нажатию клавиши
    document.addEventListener("keydown", handleEscape);

    // Слушатель для закрытия по клику вне модального окна
    document.addEventListener("click", handleOverlay);
  });
}

// функция закрытия модального окна
function closeModal(popup) {
  popup.classList.remove("popup_is-opened");

  // Удаление обработчиков событий
  document.removeEventListener("keydown", handleEscape);
  document.removeEventListener("click", handleOverlay);
}

// //функция закрытия модального окна по клику на оверлей
function handleOverlay(event) {
  if (event.target.classList.contains("popup_is-opened")) {
    closeModal(event.target);
  }
}

// Функция закрытия модального окна через Esc
function handleEscape(event) {
  if (event.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

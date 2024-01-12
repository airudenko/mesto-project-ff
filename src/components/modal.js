export { modalOpen, modalClose };

// // // функция открытия модального окна
function modalOpen(event) {
  // Добавление класса с анимацией
  event.classList.add("popup_is-animated");

  // Задержка перед добавлением класса открытия
  setTimeout(function () {
    // Добавление класса для открытия модального окна
    event.classList.add("popup_is-opened");

    // Слушатель для закрытия по нажатию клавиши
    document.addEventListener("keydown", keyHandler);

    // Слушатель для закрытия по клику вне модального окна
    document.addEventListener("click", modalCloseOverlay);
  });
}

// //функция закрытия модального окна 
function modalClose(event){
  event.classList.remove("popup_is-opened");
};

// //функция закрытия модального окна по клику на оверлей
function modalCloseOverlay(event){
if (event.target.classList.contains("popup_is-opened")){
modalClose(event.target);
}};

// Функция закрытия модального окна через Esc
function keyHandler(event){
 if (event.key === 'Escape'){
   modalClose(document.querySelector(".popup_type_edit"));
   modalClose(document.querySelector(".popup_type_new-card"));
    modalClose(document.querySelector(".popup_type_image"));
 }};
import './pages/index.css';
import {initialCards} from './components/cards.js'
import { createCard, delCard, likeCard } from './components/card.js';
import { modalOpen, modalClose } from './components/modal.js';

// @todo: Темплейт карточки
// @todo: DOM узлы

const cardsContainer = document.querySelector(".places__list");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");

// кнопки
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddProfile = document.querySelector(".profile__add-button");
const buttonClosePopup = document.querySelector(".popup__close");
const buttonClosePopupNewCard = document.querySelector(".popup_type_new-card .popup__close");
const buttonClosePopupTypeImage = document.querySelector(".popup_type_image .popup__close");

// Форма
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');


// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
  cardsContainer.append(createCard(item.name, item.link, delCard));
});


// @todo: Функция открытия модального окна с картинкой
function modalOpenImg(imageUrl, imageName) {
  const modalImage = document.querySelector(".popup__image");
  const modalTitle = document.querySelector(".popup__caption");

  modalImage.src = imageUrl;
  modalImage.alt = imageName;
  modalTitle.textContent = imageName;

  modalOpen(document.querySelector(".popup_type_image"));
}

// Обработчик события для открытия картинки при клике на картинку
cardsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("card__image")) {
    const imageUrl = event.target.src;
    const imageName = event.target.alt;
    modalOpenImg(imageUrl, imageName);
  }
});

// закрытие модального окна по кнопке для popupTypeEdit
buttonClosePopup.addEventListener('click', function(){
modalClose(popupTypeEdit);
});


// закрытие модального окна по кнопке для popupNewCard
buttonClosePopupNewCard.addEventListener('click', function(){
  modalClose(popupNewCard);
});

// закрытие модального окна по кнопке для popupTypeImage

buttonClosePopupTypeImage.addEventListener('click', function(){
  modalClose(popupTypeImage);
});


// открытие модального окна по кнопке редактирования
buttonEditProfile.addEventListener("click", function(){
  modalOpen(popupTypeEdit);
});


// открытие модального окна по кнопке добавления
 buttonAddProfile.addEventListener("click", function(){
modalOpen(popupNewCard);
 });


//  Функция для открытия попапа и заполнения полей текущими значениями
function openPopup() {
    // Получаем текущие значения полей на странице
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    const currentName = profileTitle.textContent;
    const currentJob = profileDescription.textContent;

    // Заполняем поля в попапе текущими значениями
    nameInput.value = currentName;
    jobInput.value = currentJob;
}

// Функция для обновления данных на странице
function handleFormSubmit(evt) {
    evt.preventDefault(); // Отменяем стандартное поведение отправки формы

    // Получаем новые значения полей из формы
    const newName = nameInput.value;
    const newJob = jobInput.value;

    // Обновляем текстовое содержимое элементов на странице
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');
    profileTitle.textContent = newName;
    profileDescription.textContent = newJob;

    // Закрываем попап
    closePopup();
}

// Функция для закрытия попапа
function closePopup() {
    popupTypeEdit.classList.remove('popup_is-opened');
      popupNewCard.classList.remove('popup_is-opened');
}

// При клике на кнопку открываем попап с заполненными данными
buttonEditProfile.addEventListener('click', openPopup);

// Прикрепляем обработчик к форме
formElement.addEventListener('submit', handleFormSubmit);


const cardDescription = document.querySelectorAll(".card__description .card__like-button");
cardDescription.forEach(function (cardDescription) {
  cardDescription.addEventListener('click', function (event) {
    if (event.target.classList.contains("card__like-button")) {
      likeCard(event);
    }
  });
});


// Добавление новой карточки
const formAddCard = document.querySelector(".popup_type_new-card .popup__form");
formAddCard.addEventListener('submit', function(event) {
  event.preventDefault();


  const inputName = formAddCard.querySelector(".popup__input_type_card-name");
  const inputLink = formAddCard.querySelector(".popup__input_type_url");

  const valueName = inputName.value;
  const valueLink = inputLink.value;

  const newCard = createCard(valueName, valueLink, delCard, likeCard); 
  cardsContainer.prepend(newCard);


  formAddCard.reset();

  closePopup();
});


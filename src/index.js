import "./pages/index.css";
import { initialCards } from "./components/cards.js";
import {createCard, delCard, likeCard, handlerClickImage} from "./components/card.js";
import { openModal, closeModal } from "./components/modal.js";
export { openModalImg };

// @todo: Темплейт карточки
// @todo: DOM узлы

const cardsContainer = document.querySelector(".places__list");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupTypeImage = document.querySelector(".popup_type_image");

// кнопки
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddProfile = document.querySelector(".profile__add-button");
const profileCloseButton = document.querySelector(".popup__close");
const buttonCloseFormAddCard = document.querySelector(".popup_type_new-card .popup__close");
const buttonCloseModalImage = document.querySelector(".popup_type_image .popup__close");

// Форма
const profileForm = document.querySelector(".popup_type_edit .popup__form");
const formAddCard = document.querySelector(".popup_type_new-card .popup__form");
const modalImage = document.querySelector(".popup__image");

const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");
const modalTitle = document.querySelector(".popup__caption");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector(".popup_type_new-card .popup__input_type_card-name");
const inputLink = document.querySelector(".popup_type_new-card .popup__input_type_url");

// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link, delCard, likeCard, handlerClickImage);
  cardsContainer.append(newCard);
});

// @todo: Функция открытия модального окна с картинкой
function openModalImg(imageUrl, imageName) {
  modalImage.src = imageUrl;
  modalImage.alt = imageName;
  modalTitle.textContent = imageName;

  openModal(popupTypeImage);
}

// закрытие модального окна по кнопке для popupTypeEdit
profileCloseButton.addEventListener("click", function () {
  closeModal(popupTypeEdit);
});

// закрытие модального окна по кнопке для popupNewCard
buttonCloseFormAddCard.addEventListener("click", function () {
  closeModal(popupNewCard);
});

// закрытие модального окна по кнопке для popupTypeImage

buttonCloseModalImage.addEventListener("click", function () {
  closeModal(popupTypeImage);
});

// открытие модального окна по кнопке редактирования
buttonEditProfile.addEventListener("click", function () {
  openModal(popupTypeEdit);
});

// открытие модального окна по кнопке добавления
buttonAddProfile.addEventListener("click", function () {
  openModal(popupNewCard);
});

//  Функция для открытия попапа и заполнения полей текущими значениями
function openProfilePopup() {
  // Получаем текущие значения полей на странице
  const currentName = profileTitle.textContent;
  const currentJob = profileDescription.textContent;

  // Заполняем поля в попапе текущими значениями
  nameInput.value = currentName;
  jobInput.value = currentJob;
}

// Функция для обновления данных на странице
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Отменяем стандартное поведение отправки формы

  // Получаем новые значения полей из формы
  const newName = nameInput.value;
  const newJob = jobInput.value;

  // Обновляем текстовое содержимое элементов на странице
  profileTitle.textContent = newName;
  profileDescription.textContent = newJob;

  // Закрываем попап
  closeModal(popupTypeEdit);
}

// При клике на кнопку открываем попап с заполненными данными
buttonEditProfile.addEventListener("click", openProfilePopup);

// Прикрепляем обработчик к форме
profileForm.addEventListener("submit", handleProfileFormSubmit);

// Добавление новой карточки

formAddCard.addEventListener("submit", function (event) {
  event.preventDefault();

  const valueName = inputName.value;
  const valueLink = inputLink.value;

  const newCard = createCard(valueName, valueLink, delCard, likeCard, handlerClickImage);
  cardsContainer.prepend(newCard);

  formAddCard.reset();

  closeModal(popupNewCard);
});

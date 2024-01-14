export { createCard, delCard, likeCard, handlerClickImage };
import { openModalImg } from "../index.js";

const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки

function createCard(name, link, deleteCard, likeCard, handlerClickImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  deleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  if (likeCard) {
    likeButton.addEventListener("click", likeCard);
  }

  cardImage.addEventListener("click", function () {
    if (handlerClickImage) {
      handlerClickImage(link, name);
    }
  });

  return cardElement;
}

function handlerClickImage(link, name) {
  openModalImg(link, name);
}

function delCard(cardElement) {
  cardElement.remove();
}

// Лайк карточки
function likeCard(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

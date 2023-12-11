// @todo: Темплейт карточки
// @todo: DOM узлы

const cardsContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки

function createCard(name, link, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// @todo: Функция создания карточки

function delCard(evt) {
  const imgList = evt.target.closest(".card");
  imgList.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
  cardsContainer.append(createCard(item.name, item.link, delCard));
});

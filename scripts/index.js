// @todo: Темплейт карточки
// @todo: DOM узлы

const listContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки

function addCard(name, link, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__title").textContent = name;
  cardElement.querySelector(".card__image").src = link;

  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// @todo: Функция удаления карточки

function delCard(evt) {
  const imgList = evt.target.closest(".card");
  imgList.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (item) {
  listContainer.append(addCard(item.name, item.link, delCard));
});

export { createCard, delCard, likeCard };

const cardTemplate = document.querySelector("#card-template").content;
// @todo: Функция создания карточки
function createCard(name, link, deleteCard, likeCard, imageClickHandler) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

 const likeButton = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  deleteButton.addEventListener("click", deleteCard);

   if (likeCard) {
    likeButton.addEventListener("click", likeCard);
  }

   cardImage.addEventListener("click", function (event) {
    if (imageClickHandler) {
      imageClickHandler(event.target.src);
    }
  });

  return cardElement;
}

// @todo: Функция создания карточки

function delCard(event) {
  const imgList = event.target.closest(".card");
  imgList.remove();
}


// Лайк карточки
function likeCard(event) {
  event.target.classList.toggle("card__like-button_is-active");
};




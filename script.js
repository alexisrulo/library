const books = document.querySelector(".books");
const myLibrary = [];

class Book {
  constructor(title, autor, pages, read, index) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
    this.index = index;
  }
}

function addANewBook(title, autor, pages, read) {
  let newBook = new Book(title, autor, pages, read, myLibrary.length);
  myLibrary.push(newBook);
  addBookToLibrary(newBook.index);
}

function addBookToLibrary(index) {
  const bookToAdd = myLibrary[index];

  const topCard = document.createElement("div");
  const titleCard = document.createElement("h3");
  const deleteItem = document.createElement("div");
  const autorCard = document.createElement("p");
  const pagesCard = document.createElement("p");
  const readCard = document.createElement("button");

  titleCard.innerText = bookToAdd.title;

  deleteItem.classList.add("deleteButton-" + bookToAdd.index, "deleteButton");
  deleteItem.innerText = "X";

  topCard.innerHTML = "";
  topCard.classList.add("topCard");
  topCard.appendChild(titleCard.cloneNode(true));
  topCard.appendChild(deleteItem.cloneNode(true));

  autorCard.innerText = bookToAdd.autor;

  pagesCard.innerText = bookToAdd.pages + " pages";

  readCard.classList.add(
    bookToAdd.read ? "botonRead" : "botonNotRead",
    "boton-" + bookToAdd.index,
    "boton"
  );
  readCard.innerText = bookToAdd.read ? "Already read" : "Not read yet";

  const bookCard = document.createElement("div");
  bookCard.classList.add("book__card", "card-" + bookToAdd.index);
  bookCard.appendChild(topCard);
  bookCard.appendChild(autorCard);
  bookCard.appendChild(pagesCard);
  bookCard.appendChild(readCard);
  books.appendChild(bookCard.cloneNode(true));

  const buttonDelete = document.querySelector(
    ".deleteButton-" + bookToAdd.index
  );
  buttonDelete.addEventListener("click", () => {
    deleteABook(bookToAdd.index);
  });

  const cardChangeRead = document.querySelector(".boton-" + bookToAdd.index);
  cardChangeRead.addEventListener("click", () => {
    switchRead(cardChangeRead);
  });
}

function switchRead(card) {
  if (card.classList.contains("botonNotRead")) {
    card.classList.remove("botonNotRead");
    card.classList.add("botonRead");
    card.innerText = "Already Read";
  } else {
    card.classList.remove("botonRead");
    card.classList.add("botonNotRead");
    card.innerText = "Not read yet";
  }
}
function showHideForm() {
  if (addForm.classList.contains("formhide")) {
    backgroundBlur.classList.remove("blurhide");
    addForm.classList.remove("formhide");
  } else {
    backgroundBlur.classList.add("blurhide");
    addForm.classList.add("formhide");
  }
}

const addForm = document.querySelector(".form");
const addBook = document.querySelector(".add__button");
const closeButton = document.querySelector(".closeButton");
const backgroundBlur = document.querySelector(".blur");

addBook.addEventListener("click", showHideForm);
closeButton.addEventListener("click", showHideForm);

const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const readForm = document.querySelector("#read");

addForm.addEventListener("submit", () => {
  addANewBook(
    titleForm.value,
    authorForm.value,
    pagesForm.value,
    readForm.checked
  );
  titleForm.value = "";
  authorForm.value = "";
  pagesForm.value = "";
  readForm.checked = false;
  showHideForm();
});

function deleteABook(index) {
  delete myLibrary[index];
  const cardToDelete = document.querySelector(".card-" + index);
  books.removeChild(cardToDelete);
}

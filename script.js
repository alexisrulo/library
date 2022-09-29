const books = document.querySelector(".books");
const bookCard = document.createElement("div");
const myLibrary = [];

bookCard.classList.add("book__card");
// {title: "The Hobbit", autor: "J.R.R Tolkien", pages: 236, read: true}

function Book(title, autor, pages, read) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.read = read;
}

function addANewBook(title, autor, pages, read) {
  let book = new Book(title, autor, pages, read);
  myLibrary.push(book);
  books.innerHTML = "";
  displayBook();
}

addANewBook("The Hobbit", "J.R.R Tolkien", 236, true);
addANewBook("Harry Potter", "JRR", 234, false);

function displayBook() {
  myLibrary.forEach((book) => {
    bookCard.innerHTML = "";

    const titleCard = document.createElement("h3");
    titleCard.innerText = book.title;
    bookCard.appendChild(titleCard.cloneNode(true));

    const autorCard = document.createElement("p");
    autorCard.innerText = book.autor;
    bookCard.appendChild(autorCard.cloneNode(true));

    const pagesCard = document.createElement("p");
    pagesCard.innerText = book.pages + " pages";
    bookCard.appendChild(pagesCard.cloneNode(true));

    const readCard = document.createElement("button");
    readCard.classList.add(book.read ? "botonRead" : "botonNotRead", "boton");
    readCard.innerText = book.read ? "already read" : "not read yet";
    bookCard.appendChild(readCard.cloneNode(true));
    books.appendChild(bookCard.cloneNode(true));
  });
}
const showHideForm = () => {
  if (addForm.classList.contains("formhide")) {
    addForm.classList.remove("formhide");
    addForm.classList.add("formshow");
  } else {
    addForm.classList.remove("formshow");
    addForm.classList.add("formhide");
  }
};
const addForm = document.querySelector(".form");
const addBook = document.querySelector(".add__button");
addBook.addEventListener("click", showHideForm);

const titleForm = document.querySelector("#title").;
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const readForm = document.querySelector("#read");

const addButtonForm = document.querySelector(".addButtonForm");

addButtonForm.addEventListener("click", () => {
  addANewBook(
    titleForm.value,
    authorForm.value,
    pagesForm.value,
    readForm.checked
  );
  showHideForm()
});

const books = document.querySelector(".books");
const bookCard = document.createElement("div");
bookCard.classList.add("book__card");
const myLibrary = [];


function Book(title, autor, pages, read, index) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.read = read;
  this.index = index;
}

function addANewBook(title, autor, pages, read) {
  let book = new Book(title, autor, pages, read, (myLibrary.length));
  myLibrary.push(book);
  books.innerHTML = "";
  displayBook();
}
console.log(myLibrary)
// addANewBook("The Hobbit", "J.R.R Tolkien", 236, true);
// addANewBook("Harry Potter", "JRR", 234, false);

const topCard = document.createElement('div')
const titleCard = document.createElement("h3");
const deleteItem = document.createElement('div');
const autorCard = document.createElement("p");
const pagesCard = document.createElement("p");
const readCard = document.createElement("button");

Book.prototype.displayBook = function () {
  myLibrary.forEach((book) => {
    bookCard.innerHTML = '';

    topCard.innerHTML = ''
    topCard.classList.add('topCard')

    titleCard.innerText = book.title;
    topCard.appendChild(titleCard.cloneNode(true));

    deleteItem.classList.add('deleteButton');
    deleteItem.id = book.index;
    deleteItem.innerText = 'X'
    console.log(deleteItem)

    topCard.appendChild(deleteItem.cloneNode(true));

    bookCard.appendChild(topCard.cloneNode(true));

    autorCard.innerText = book.autor;
    bookCard.appendChild(autorCard.cloneNode(true));

    pagesCard.innerText = book.pages + " pages";
    bookCard.appendChild(pagesCard.cloneNode(true));

    readCard.classList.add(book.read ? "botonRead" : "botonNotRead", "boton");
    readCard.innerText = book.read ? "already read" : "not read yet";
    bookCard.appendChild(readCard.cloneNode(true));
    
    books.appendChild(bookCard.cloneNode(true));
  });
}

function switchRead (){
  if (addForm.classList.contains("formhide")) {
    addForm.classList.remove("formhide");
    addForm.classList.add("formshow");
  } else {
    addForm.classList.remove("formshow");
    addForm.classList.add("formhide");
  }
}
function showHideForm() {
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

const titleForm = document.querySelector("#title");
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
  titleForm.value = '';
  authorForm.value = '';
  pagesForm.value = '';
  readForm.checked = false;
  showHideForm()
});


function deleteABook(index){
  myLibrary.splice(index, 1)
  console.log('hi')
}

function deleteEvent(){
const deleteButton = document.querySelectorAll('.deleteButton')
deleteButton.forEach((button) => button.addEventListener('click', () => {deleteABook(button.id)}))
}

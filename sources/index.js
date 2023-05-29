const mainContainer = document.querySelector('#books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitButton = document.querySelector('#book-submit');
const form = document.querySelector('#form-book');

let books = [];

if (localStorage.getItem('library')) {
  /* Reasign the books array to the localStorage library */
  books = JSON.parse(localStorage.getItem('library'));
}

/* Constructor */
function Book(title, author) {
  this.title = title;
  this.author = author;
}

/* Function that creates a book */
function createBook(book) {
  /* Create elements */
  const bookContainer = document.createElement('div');
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const removeButton = document.createElement('button');
  const hr = document.createElement('hr');

  /* Add Classes and properties */
  bookContainer.classList.add('books');
  removeButton.tabIndex = books.indexOf(book);
  removeButton.name = book.title;

  /* Add text */
  pTitle.textContent = book.title;
  pAuthor.textContent = book.author;
  removeButton.textContent = 'Remove';

  /* Append elements */
  bookContainer.appendChild(pTitle);
  bookContainer.appendChild(pAuthor);
  bookContainer.appendChild(removeButton);
  bookContainer.appendChild(hr);
  mainContainer.appendChild(bookContainer);

  /* A remove book function */
  function deleteBook() {
    if (removeButton.name === book.title) {
      bookContainer.remove();

      /* Split and join the array */
      const index = removeButton.tabIndex;
      books = [...books.slice(0, index), ...books.slice(index + 1)];
      localStorage.setItem('library', JSON.stringify(books));
    }
  }

  /* Add a click listener to the remove button */
  removeButton.addEventListener('click', deleteBook);
}

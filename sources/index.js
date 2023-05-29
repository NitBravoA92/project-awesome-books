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
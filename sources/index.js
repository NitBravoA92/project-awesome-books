const mainContainer = document.querySelector('#books-container');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const submitButton = document.querySelector('#book-submit');
const form = document.querySelector('#form-book');

class Books {
  constructor() {
    this.books = [];

    if (localStorage.getItem('library')) {
      /* Reasign the books array to the localStorage library */
      this.books = JSON.parse(localStorage.getItem('library'));
    }
  }

  info(title, author) {
    this.title = title;
    this.author = author;
  }

  /* A method to save the info in the local storage */
  storage() {
    this.books.push({ title: `${this.title}`, author: `${this.author}` });
    localStorage.setItem('library', JSON.stringify(this.books));
  }

   /* Function that creates a book */
   createBook(book) {
    /* Create elements */
    const bookContainer = document.createElement('div');
    const bookDetails = document.createElement('div');
    const pTitle = document.createElement('h3');
    const pAuthor = document.createElement('p');
    const removeButton = document.createElement('button');

    /* Add Classes and properties */
    bookContainer.classList.add('book');
    bookDetails.classList.add('book-details');
    removeButton.tabIndex = this.books.indexOf(book);
    removeButton.name = book.title;

    /* Add text */
    pTitle.textContent = book.title;
    pAuthor.textContent = `by ${book.author}`;
    removeButton.textContent = 'Remove';

    /* Append elements */
    bookDetails.appendChild(pTitle);
    bookDetails.appendChild(pAuthor);
    bookContainer.appendChild(bookDetails);
    bookContainer.appendChild(removeButton);
    mainContainer.appendChild(bookContainer);

    /* A remove book function */
    const deleteBook = () => {
      if (removeButton.name === book.title) {
        bookContainer.remove();

        /* Split and join the array */
        const index = removeButton.tabIndex;
        this.books = [...this.books.slice(0, index), ...this.books.slice(index + 1)];
        localStorage.setItem('library', JSON.stringify(this.books));
      }
    };

    /* Add a click listener to the remove button */
    removeButton.addEventListener('click', deleteBook);
  }

  /* A method that displays all the books elements */
  displayBooks() {
    this.books.forEach((book) => {
      this.createBook(book);
    });
  }
}


/* A instance of the class that displays the added books */
const myBooks = new Books();
myBooks.displayBooks();

/* A function that is called when the user clicks the submit button */
function addBook(event) {
  /* Create a new book */
  const book = new Books();
  book.info(titleInput.value, authorInput.value);

  /* If the inputs has no values then form is not submmited */
  if (!titleInput.validity.valueMissing && !authorInput.validity.valueMissing) {
    event.preventDefault();
  } else {
    return;
  }

  /* Save the book in the array and the local storage */
  book.storage();

  /* Resets the form */
  form.reset();

  /* Creates the new book element */
  book.createBook(book);
}

submitButton.addEventListener('click', addBook);


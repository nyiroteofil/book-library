let library = [];

function Book(title, author, pages, isRead, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.index = index;
}

Book.prototype.info = function() {
    return `the book's title is ${this.title}.
     It was written by ${this.author} and has ${this.pages} pages`;
};

function togleForm() {
    let formContainer = document.querySelector('.form-container')

    if (formContainer.classList.contains('show')) {
        formContainer.classList.remove('show');
    } else {
        formContainer.classList.add('show');
    }
}

function renderBooks(Bookindex) {

}

function submitNewBook() {
    let formContainer = document.querySelector('.form-container');

    let title = document.querySelector('#titleInput').value;
    let author = document.querySelector('#authorInput').value;
    let pages = document.querySelector('#page-number').value;
    let isRead = document.querySelector('#isReadCheck').checked;

    let NewBook = new Book(title, author, pages, isRead, library.length);

    NewBook.prototype = Object.create(Book.prototype);

    library.push(NewBook);

    formContainer.classList.remove('show');
}

const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click', togleForm);

const submitBook = document.querySelector('#submit-btn')

submitBook.addEventListener('click', submitNewBook)



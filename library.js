let library = [];


const addBtn = document.querySelector('.add-btn')

addBtn.addEventListener('click', toggleForm);

const submitBook = document.querySelector('#submit-btn')

submitBook.addEventListener('click', submitNewBook)

/*Functions*/


class Book {

    constructor(title, author, pages, isRead, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.index = index;
    }
}

Book.prototype.info = function() {
    return `the book's title is ${this.title}.
     It was written by ${this.author} and has ${this.pages} pages`;
};


function updateIndexes(startingIndex) {
    for (let i = startingIndex; i < library.length; i++) {
        let currentBook = document.querySelector(`.book-${i}`);
        let currentStatusBar = document.querySelector(`.status-bar-${i}`);
        let currentTitle = document.querySelector(`.book-title-${i}`);
        let currentAuthor = document.querySelector(`.book-author-${i}`);
        let currentPages = document.querySelector(`.pages-${i}`);
        let currentBtnGroup = document.querySelector(`.btn-group-${i}`);
        let currentStatusBtn = document.querySelector(`.status-button-${i}`);
        let currentRmBtn = document.querySelector(`.remove-btn-${i}`);

        currentBook.classList.add(`book-${i - 1}`);
        currentBook.classList.remove(`book-${i}`);
        
        currentStatusBar.classList.add(`status-bar-${i - 1}`);
        currentStatusBar.classList.remove(`status-bar-${i}`);

        currentTitle.classList.add(`book-title-${i - 1}`);
        currentTitle.classList.remove(`book-title-${i}`);
        
        currentAuthor.classList.add(`book-author-${i - 1}`);
        currentAuthor.classList.remove(`book-author-${i}`);
   
        currentPages.classList.add(`pages-${i - 1}`);
        currentPages.classList.remove(`pages-${i}`);
   
        currentBtnGroup.classList.add(`btn-group-${i - 1}`);
        currentBtnGroup.classList.remove(`btn-group-${i}`);

        currentStatusBtn.classList.add(`status-button-${i - 1}`);
        currentStatusBtn.classList.remove(`status-button-${i}`);

        currentRmBtn.classList.add(`remove-btn-${i - 1}`)
        currentRmBtn.classList.remove(`remove-btn-${i}`)
    }

    for (let i = startingIndex; i < library.length; i++) {
        library[i].index = i - 1;
    }
}


function createElement(type, classN, id, parent) {
    let parentElement = document.querySelector(`${parent}`);

    let newEl = document.createElement(`${type}`);
    newEl.classList.add(`${classN}`);
    newEl.id = `${id}`;

    parentElement.appendChild(newEl);
}

function removeBook(index) {
    let book = document.querySelector(`.book-${index}`)

    updateIndexes(index);

    book.remove();

    library.splice(index, 1);
}

function changeSatus(index) {
    let btn = document.querySelector(`.status-button-${index}`);
    let stBar = document.querySelector(`.status-bar-${index}`);
    
    if (library[index].isRead === false) {
        library[index].isRead = true;

        btn.classList.remove('unread');
        btn.classList.add('read');
        btn.textContent = 'read';

        stBar.classList.remove('unread');
        stBar.classList.add('read');

    } else {
        library[index].isRead = false;

        btn.classList.remove('read');
        btn.classList.add('unread');
        btn.textContent = 'Not read';

        stBar.classList.remove('read');
        stBar.classList.add('unread');

    }


}

Book.prototype.render = function() {

/**For now I add the index to the class, because it is easier to assign text for each specificly*/    

createElement('div', `book-${this.index}`, this.index, '.shelf');
createElement('div', `status-bar-${this.index}`, this.index, `.book-${this.index}`);
createElement('p', `book-title-${this.index}`, '', `.book-${this.index}`),
createElement('p', `book-author-${this.index}`,  '',`.book-${this.index}`);
createElement('p', `pages-${this.index}`, '', `.book-${this.index}`);
createElement('div', `btn-group-${this.index}`, '', `.book-${this.index}`);
document.querySelector(`.book-title-${this.index}`).textContent = `${this.title}`;
document.querySelector(`.book-author-${this.index}`).textContent = `${this.author}`;
document.querySelector(`.pages-${this.index}`).textContent = `${this.pages}`;

if (this.isRead === false) {
    createElement('div', `status-button-${this.index}`, this.index, `.btn-group-${this.index}`);
    let stButton = document.querySelector(`.status-button-${this.index}`);
    stButton.classList.add('unread');
    stButton.textContent = 'Not read';

    stButton.classList.add('change-status')

    let statusBar = document.querySelector(`.status-bar-${this.index}`)
    statusBar.classList.add('unread');

    /*Button for changing book status*/

    stButton.addEventListener('click', () => changeSatus(this.index))

    /*Button for changing book status*/

} else {
    createElement('div', `status-button-${this.index}`, this.index, `.btn-group-${this.index}`);
    let stButton = document.querySelector(`.status-button-${this.index}`);
    stButton.classList.add('read')
    stButton.textContent = 'Read';

    stButton.classList.add('change-status')

    let statusBar = document.querySelector(`.status-bar-${this.index}`)
    statusBar.classList.add('read');

    /*Button for changing book status*/

    stButton.addEventListener('click', () => changeSatus(this.index))

    /*Button for changing book status*/

}



createElement('div', `remove-btn-${this.index}`, this.index, `.btn-group-${this.index}`);
let rmBtn = document.querySelector(`.remove-btn-${this.index}`);
rmBtn.textContent = 'Remove';


/*Button for remove the books from the html and the array*/

    rmBtn.addEventListener('click', () => removeBook(this.index));

/*Button for remove the books from the html and the array*/


/**Now I will add another class names for the easier styling */

let title = document.querySelector(`.book-title-${this.index}`);
let author = document.querySelector(`.book-author-${this.index}`);
let pages = document.querySelector(`.pages-${this.index}`);
let book = document.querySelector(`.book-${this.index}`);
let statusBar = document.querySelector(`.status-bar-${this.index}`);
let btnGroup = document.querySelector(`.btn-group-${this.index}`)

book.classList.add('book');
title.classList.add('book-title');
author.classList.add('book-author');
pages.classList.add('book-pages');
statusBar.classList.add('status-bar');
btnGroup.classList.add('btn-group');

rmBtn.classList.add('remove-btn');


}


function toggleForm() {
    let formContainer = document.querySelector('.form-container')

    if (formContainer.classList.contains('show')) {
        formContainer.classList.remove('show');
    } else {
        formContainer.classList.add('show');
    }
}

function submitNewBook() {
    let title = document.querySelector('#titleInput');
    let author = document.querySelector('#authorInput');
    let pages = document.querySelector('#page-number');
    let isRead = document.querySelector('#isReadCheck');

    let NewBook = new Book(title.value, author.value, pages.value, isRead.checked, library.length);

    NewBook.prototype = Object.create(Book.prototype);

    library.push(NewBook);

    toggleForm();

    NewBook.render();

    title.value = '';
    author.value = '';
    pages.value = '';
    isRead.checked = false;
}
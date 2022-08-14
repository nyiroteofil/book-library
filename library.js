let library = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.addBookToLibrary = () => {
    library.unshift(this);
}

const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', () => {
    let parent = document.querySelector('.shelf');
    let container = document.createElement('div');
    container.classList.add('form-container');
    parent.appendChild(container);

    let bookForm = document.createElement('form');
    bookForm.target = '';
    container.appendChild(bookForm);

    let formTitle = document.createElement('h2');
    formTitle.textContent = 'New book';
    bookForm.appendChild(formTitle);

    let inputDivTitle = document.createElement('div');
    inputDivTitle.classList.add('input-container')
    bookForm.appendChild(inputDivTitle);

    let inputTitle = document.createElement('input');
    inputTitle.id = 'titleInput';
    inputDivTitle.appendChild(inputTitle);

    let labelForTitle = document.createElement('label');
    labelForTitle.htmlFor = 'titleInput';
    labelForTitle.textContent = 'Title';
    inputDivTitle.appendChild(labelForTitle);

    let inputDivAuthor = document.createElement('div');
    inputDivAuthor.classList.add('input-container')
    bookForm.appendChild(inputDivAuthor);

    let inputAuthor = document.createElement('input');
    inputAuthor.id = 'authorInput';
    inputDivAuthor.appendChild(inputAuthor);

    let labelForAuthor = document.createElement('label');
    labelForAuthor.htmlFor = 'authorInput';
    labelForAuthor.textContent = 'Author';
    inputDivAuthor.appendChild(labelForAuthor);

    let inputDivPage = document.createElement('div');
    inputDivPage.classList.add('input-container')
    bookForm.appendChild(inputDivPage);

    let inputPage = document.createElement('input');
    inputPage.type = 'number';
    inputPage.min
    inputPage.id = 'page-number';
    inputDivPage.appendChild(inputPage);

    let labelForPage = document.createElement('label');
    labelForPage.htmlFor = 'page-number';
    labelForPage.textContent = 'The book\'s length';
    inputDivPage.appendChild(labelForPage);

    let inputDivCheck = document.createElement('div')
    inputDivCheck.classList.add('input-container')
    bookForm.appendChild(inputDivCheck);

    let isReadCheck = document.createElement('input');
    isReadCheck.type = 'checkbox';
    isReadCheck.id = 'read-check';
    inputDivCheck.appendChild(isReadCheck);

     let labelForCheck = document.createElement('label');
    labelForCheck.htmlFor = 'read-check';
    labelForCheck.textContent = 'Have you read the book?';
    inputDivCheck.appendChild(labelForCheck);

    let addBook = document.createElement('input');
    addBook.type = 'submit';
    addBook.id = 'submit-btn';
    addBook.value = 'Add new book';
    bookForm.appendChild(addBook);
});


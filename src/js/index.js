let myLibrary = [];

function Book(title, author, gender, pages, read = false) {
  this.title = title;
  this.author = author;
  this.gender = gender;
  this.read = read;
  this.pages = pages;
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
  setBooks();
};

Book.prototype.toggleRead = function () {
  this.read = !this.read;
  return this;
};

function mapBooks(callback) {
  myLibrary.map((book, index) => {
    callback && callback(book, index);
    return true;
  });
}

function deleteWithIndex(index, callback) {
  myLibrary.splice(index, 1);
  callback && callback();
  setBooks();
}

function toggleReadWithIndex(index, callback) {
  myLibrary[index] = myLibrary[index].toggleRead();
  callback && callback();
  setBooks();
}

function getBooks() {
  let data = localStorage.getItem('myLibrary');
  data = JSON.parse(data);
  const result = [];
  data.map(book => {
    const {
      title,
      author,
      gender,
      read,
      pages,
    } = book;
    result.push(new Book(title, author, gender, pages, read));
    return true;
  });
  return result;
}

function setBooks() {
  const data = JSON.stringify(myLibrary);
  localStorage.setItem('myLibrary', data);
}

myLibrary = getBooks();

let myLibrary = []

function Book(title, author, gender, read = false) {
  this.title = title;
  this.author = author;
  this.gender = gender;
  this.read = read;
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
  setBooks();
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
  return this;
}

function mapBooks(callback) {
  myLibrary.map((book, index) => {
    callback && callback(book, index);
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
  data = localStorage.getItem('myLibrary');
  data = JSON.parse(data);
  result = [];
  data.map(book => {
    let { title, author, gender, read } = book;
    result.push(new Book(title, author, gender, read));
  });
  return result;
}

function setBooks() {
  data = JSON.stringify(myLibrary);
  localStorage.setItem('myLibrary', data);
}

myLibrary = getBooks();
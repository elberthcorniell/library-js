let myLibrary = [];

function Book(title, author, gender) {
    this.title = title
    this.author = author
    this.gender = gender
}

Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this)
}

function mapBooks(callback) {
    myLibrary.map((book, index) => {
        callback && callback(book, index)
    })
}

function deleteWithIndex(index, callback) {
    console.log(index)
    myLibrary.splice(index, 1)
    callback && callback()
}

new Book('Magic Kingdom', 'idk', 'magic').addBookToLibrary()
new Book('Magic Kingdom 1', 'idk', 'magic').addBookToLibrary()
new Book('Magic Kingdom 2', 'idk', 'magic').addBookToLibrary()

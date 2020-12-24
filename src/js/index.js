let myLibrary = [];

function Book(name, author, gender) {
    this.name = name
    this.author = author
    this.gender = gender
}

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this)
}

function mapBooks(callback) {
    myLibrary.map(book => {
        callback && callback(book)
    })
}

new Book('Magic Kingdom', 'idk', 'magic').addBookToLibrary()
new Book('Magic Kingdom 1', 'idk', 'magic').addBookToLibrary()
new Book('Magic Kingdom 2', 'idk', 'magic').addBookToLibrary()

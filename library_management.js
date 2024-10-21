
// Define class of book

class Book {
constructor(title, author, ISBN) {
this.title = title;
this.author = author;
this.ISBN = ISBN;
this._isAvailable = true;

}

// Return String with book details
getDetails() {
return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;  
}
//getter method for avialable (true)
get isAvailable () {
    return this._isAvailable;
}
//setter method

set isAvailable(status) {
// use boolean to check status

if(typeof status === 'boolean') {
    this._isAvailable = status;
} else {
    console.error("Use 'true' or 'false' to set availability")
}

}

}

// test below remove // 
// const book1 = new Book  ("the game", "Neal Yates", "123098");
// console.log(book1.getDetails());
// console.log(book1.isAvailable);

// remove // from ^^^^^^^^^

//defining the class section

class Section {
    constructor(name) {
        this.name = name;
        this.books = []
    }

    // add a book object to the books array
    addBook(book) {
        this.books.push(book);
        return this;
    }

    // return total avialable books
    getAvailablebooks() {
return this.books.filter(book => book.isAvailable).length;
    }

    // listing all the books in the section
    listBooks () {
        console.log (`Books in the ${this.name} section`);
        this.books.forEach(book =>
            console.log(`- ${book.title} (${book.isAvailable ? "Available" : "Borrowed"})`)
        );
    }

}

// Test Below
const book1 = new Book  ("the game", "Neal Yates", "123098");
const book2 = new Book("The new Game", "Kyle Malone", "123097");

// Create a new section
const fiction = new Section("Fiction");

//Add books to the section 
fiction.addBook(book1).addBook(book2);

// List books in the section to see their details and availability
fiction.listBooks();
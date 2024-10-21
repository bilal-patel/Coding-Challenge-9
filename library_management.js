// Task 1 
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

// TASK 2

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
// const book1 = new Book  ("the game", "Neal Yates", "123098");
// const book2 = new Book("The new Game", "Kyle Malone", "123097");

// // Create a new section
// const fiction = new Section("Fiction");

// //Add books to the section 
// fiction.addBook(book1).addBook(book2);

// // List books in the section to see their details and availability
// fiction.listBooks();

// // define the class

// TASK 3 


class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

//borrow book is available

borrowedBook (book) {
    if (book.isAvailable) { // check is book is available
        book.isAvailable = false; // update status
        this.borrowedBooks.push(book);
        console.log(`${book.title} is borrowed by ${this.name}`)
    } else{
        console.log(`Not available: ${book.title}`)
    }
}
// return borrowed book
 returnBook (book) {
 const index = this.borrowedBooks.indexOf(book); // find using index method


 //check if book is available
 if (index !== -1) {book.isAvailable = true;
    this.borrowedBooks.splice(index, 1); //remove book from the borrow array
    console.log(`${book.title} returned by ${this.name}`); /// log return
 } else {

    console.log(`${book.title} not borrowed by ${this.name}`);
 }

}
}

// // Test Below by removing //
// const book1 = new Book  ("the game", "Neal Yates", "123098");


// // Create a new patron
// const patron = new Patron("Steve");

// //Add books to the patron borrows
// patron.borrowedBooks.push(book1);
// book1.isAvailable = false;

// // reutrn book
// patron.returnBook(book1);


/// remove // above^^^^^^^^^^^^^^^^^^

// ouput: the game returned by Steve 


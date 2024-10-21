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


// TASK 3 - Define the Patron class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    // Borrow a book if it is available
    borrowedBook(book) {
        if (book.isAvailable) { book.isAvailable = false; // Mark the book as borrowed.
            this.borrowedBooks.push(book); // Add to borrowedBooks.
            console.log(`${book.title} is borrowed by ${this.name}`);
        } else {
            console.log(`Not available: ${book.title}`);
        }
    }

    // Return a borrowed book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.isAvailable = true; // Set the book as available again.
            this.borrowedBooks.splice(index, 1); // Remove the book from borrowedBooks.
            console.log(`${book.title} returned by ${this.name}`);
        } else {
            console.log(`${book.title} not borrowed by ${this.name}`); }
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

// TASK 4 - Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true; // Adding boolean
    }

    // Override the borrowedBook method for priority
    borrowedBook(book) {
        if (book.isAvailable) {book.isAvailable = false; // marks the book as borrowed
            this.borrowedBooks.push(book);
            console.log(`${book.title} is borrowed by VIP ${this.name}`);
        } else {
            console.log(`Not available: ${book.title} - VIP ${this.name} wants it next`); }
    }
}

// // Test Below by removing //
// const book1 = new Book  ("the game", "Neal Yates", "123098");


// // // Create a new patron and VIP
// const patron = new Patron("Steve");
// const vipPatron = new VIPPatron("Clark");

// // //Add books to the patron borrows
// patron.borrowedBook(book1);


// // // reutrn book
// vipPatron.borrowedBook(book1);

// // output will be

// "the game is borrowed by Steve
// Not available: the game - VIP Clark wants it next"


// you can remove ^^^^^ //

// TASK 5 - Methods for Adding Books and Calculating Availability
// Adding methods directly to the existing Patron class logic
Patron.prototype.addBook = function(book) { // patron class already defined, using prototype since it only way found to remove error
    this.borrowedBooks.push(book);
};

Patron.prototype.calculateTotalBooksAvailable = function() {
    return this.borrowedBooks.filter(book => book.isAvailable).length;
};

Patron.prototype.listBooks = function() {
    console.log(`Books borrowed by ${this.name}:`); this.borrowedBooks.forEach(book =>
        console.log(`- ${book.title} (${book.isAvailable ? "Available" : "Borrowed"})`)); // using function from earlier
};

// Test for Tas 5 below
// const book1 = new Book("the Game", "Neal Yates", "123098");
// const book2 = new Book("The New Game", "Kyle Malone", "123097");

// // Create a new patron for testing Task 5
// const patron = new Patron("Steve");

// // Add books to the patron's borrowedBooks
// patron.addBook(book1);
// patron.addBook(book2);

// // Calculate and print the total available books before any are borrowed
// console.log(`Total available books: ${patron.calculateTotalBooksAvailable()}`);


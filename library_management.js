
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


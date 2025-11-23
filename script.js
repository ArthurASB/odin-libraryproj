
const myLibrary = [];

function Book(title, author, read, ID) {
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor");
    }
	this.title = title;
	this.author = author;
	this.read = read;
	this.ID = ID;
}

function addBooktoLibrary (bktitle, bkauthor, bkstatus) {
    const bookID = crypto.randomUUID ();


	myLibrary.push();
}
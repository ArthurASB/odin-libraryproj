
const myLibrary = [];

function Book(title, author, read, pages, ID) {
    if (!new.target) {
        throw new Error("You must use the 'new' operator to call the constructor");
    }
	this.title = title;
	this.author = author;
	this.read = read;
	this.pages = pages;
	this.ID = ID;
}

function addBooktoLibrary (bktitle, bkauthor, bkstatus, bkpages) {
    const bookID = crypto.randomUUID();
	const newBook = new Book (bktitle, bkauthor, bkstatus, bkpages, bookID);
	myLibrary.push(newBook);
}

function displayLibrary () {
	for (const book of myLibrary) {
		console.log(book);
	}
}

addBooktoLibrary ("The Stranger", "Albert Camus", "read", 240);
displayLibrary();
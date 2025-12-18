
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
	const container = document.querySelector(".card-area");
	container.innerHTML = "";
	for (const book of myLibrary) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("card"); 

		const cardtitle = document.createElement("h3");
		cardtitle.textContent = book.title;
		newDiv.appendChild(cardtitle);

		const cardauthor = document.createElement("p");
		cardauthor.textContent = `Author: ${book.author}`;
		newDiv.appendChild(cardauthor);

		const cardpages = document.createElement("p");
		cardpages.textContent = `Pages: ${book.pages}`;
		newDiv.appendChild(cardpages);

		const cardstatus = document.createElement("p");
		cardstatus.textContent = `Status: ${book.read ? "Read" : "Not Read"}`;
		newDiv.appendChild(cardstatus);

		container.appendChild(newDiv);
	}
}

const form = document.querySelector("#book-form");


form.addEventListener ("submit", (event) => {
	event.preventDefault();
	const bktitle = document.getElementById("book-title").value;
	const bkauthor = document.getElementById("book-author").value;
	const bkpages = document.getElementById("book-pages").value;
	const isRead = document.getElementById("book-status").checked;
	addBooktoLibrary(bktitle, bkauthor, isRead, bkpages);
	displayLibrary();
	form.reset();
});
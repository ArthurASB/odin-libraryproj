
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

//ligar essa função ao botão de submit para enviar o livro pra base de dados
function addBooktoLibrary (bktitle, bkauthor, bkstatus, bkpages) {
    const bookID = crypto.randomUUID();
	const newBook = new Book (bktitle, bkauthor, bkstatus, bkpages, bookID);
	myLibrary.push(newBook);
}

function displayLibrary () {
	//criar cards na página com informações dos livros criados
	for (const book of myLibrary) {
		console.log(book);
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
	form.reset();
});
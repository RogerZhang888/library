const addBookButton = document.getElementById("new-book");

const myLibrary = [
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    read: true,
    id: "ca9db3e5-28e6-40cc-8a92-87367d810492"
  },
  {
    title: "The Invisible Man",
    author: "H. G. Wells",
    read: false,
    id: "d215be2a-5f7a-4a31-99c5-4ec807a786f4"
  }
];


document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const titleValue = document.getElementById("title").value;
    const authorValue = document.getElementById("author").value;
    addBookToLibrary(titleValue, authorValue);
  }
)

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.read = false;
    this.id = crypto.randomUUID();
    this.readBook = function () {
      this.read = true;
    };
  }
}

function addBookToLibrary(title, author){
  let book = new Book(title, author);
  myLibrary.push(book);
  console.log(book);
  console.log(myLibrary);
  displayBooks(myLibrary);
}

function displayBooks(myLibrary){
  const table = document.getElementById("all-books")
  table.innerHTML = "";
  myLibrary.forEach(book => {
    newRow = document.createElement("tr")

    let titleCell = document.createElement("td")
    titleCell.innerHTML = book.title
    newRow.appendChild(titleCell)

    let authorCell = document.createElement("td")
    authorCell.innerHTML = book.author
    newRow.appendChild(authorCell)

    let readCell = document.createElement("td")
    readCell.innerHTML = book.read
    newRow.appendChild(readCell)

    let idCell = document.createElement("td")
    idCell.innerHTML = book.id
    newRow.appendChild(idCell)

    let removeCell = document.createElement("td")
    removeCell.innerHTML = "<button>Remove</button>";
    newRow.appendChild(removeCell)

    table.appendChild(newRow);
  });
}

addEventListener(
  "DOMContentLoaded", (event) => {
    displayBooks(myLibrary);
  }
)



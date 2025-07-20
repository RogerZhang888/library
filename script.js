const myLibrary = [
  ["Harry Potter", "J. K. Rowling", true, "ca9db3e5-28e6-40cc-8a92-87367d810492"],
  ["The Invisible Man", "H. G. Wells", false, "d215be2a-5f7a-4a31-99c5-4ec807a786f4"]
]

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
  book = new Book(title, author);
  bookDetails = [];
  bookDetails.push(book.title).push(book.author).push(book.read).push(book.id);
  myLibrary.push(bookDetails);
}

function addRow(tableID){
  let tableRef = document.getElementById(tableID);
  let newRow = tableRef.insertRow(-1);
  newRow.insertCell(0);
  newRow.insertCell(1);
  newRow.insertCell(2);
  newRow.insertCell(3);
}

function displayBooks(myLibrary){
  for (let i in myLibrary){
    addRow(library);
    for (let j in i){
      table.row[-1].cell[j].innerHTML = j; 
    }
  }
}
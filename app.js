class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const tableBody = document.getElementById("tableBody");
    const entry = document.createElement("tr");
    entry.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='' id='deleteBtn'>X</a></td>`;

    tableBody.appendChild(entry);
  }

  deleteEntry(entry) {
    entry.getAttribute("id") === "deleteBtn" &&
      entry.parentElement.parentElement.remove();
  }
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI();
  console.log(book);
  ui.addBookToList(book);
});

document.getElementById("tableBody").addEventListener("click", (e) => {
  e.preventDefault();
  const ui = new UI();

  ui.deleteEntry(e.target);
});

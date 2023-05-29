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

  clearFields() {
    document.getElementById("form").reset();
  }

  showAlert(message, className) {
    const element = `
      <div class='${className} alert-container' id='alert'><p>${message}</p></div>
    `;

    document.getElementById("heading").insertAdjacentHTML("afterend", element);

    setTimeout(() => {
      const node = document.getElementById("alert");
      node.remove();
    }, 5000);
  }
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const ui = new UI();

  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("All fields are required to save book!", "error");
  } else {
    const book = new Book(title, author, isbn);
    console.log(book);
    ui.addBookToList(book);

    ui.clearFields();

    ui.showAlert("Successfully added book to list!", "success");
  }
});

document.getElementById("tableBody").addEventListener("click", (e) => {
  e.preventDefault();
  const ui = new UI();

  ui.deleteEntry(e.target);
});

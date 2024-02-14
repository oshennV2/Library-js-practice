const myLibrary = [];
const display = document.querySelector(".display");

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    const newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook() {
    display.innerHTML = ""; // Clear existing content
    myLibrary.forEach((book, index) => {
        const div = document.createElement("div");
        const removeBtn = document.createElement("button");
        const readBtn = document.createElement("button")
        const ul = document.createElement("ul")

        div.classList.add("card");
        ul.textContent = `
        Name: ${book.name}
        Author: ${book.author}
        Pages: ${book.pages}
        Read: ${book.read}
        `
        
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function() {
            removeBook(index);
        });

        if (book.read === "Yes") {
            readBtn.textContent = "Mark as Unread";
        } else {
            readBtn.textContent = "Mark as Read";
        }
        readBtn.addEventListener("click", function() {
            if (book.read === "Yes") {
                book.read = "No";
            } else {
                book.read = "Yes";
            }
            displayBook(); // Update display after changing read status
        });

        removeBtn.classList.add("card-remove-btn")
        readBtn.classList.add("read-btn")


        div.appendChild(ul)
        div.appendChild(removeBtn);
        div.appendChild(readBtn);
        display.appendChild(div);
    
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBook();
}

const newBtn = document.querySelector(".new-book-btn");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".close-btn");
const subBtn = document.querySelector(".add-book-btn");

newBtn.addEventListener("click", function() {
    dialog.showModal();
});

closeBtn.addEventListener("click", function() {
    dialog.close();
});

subBtn.addEventListener("click", function() {
    const inputName = document.getElementById("book-name");
    const inputAuthor = document.getElementById("author-name");
    const inputPages = document.getElementById("pages");
    const inputYes = document.getElementById("yes");

    const name = inputName.value;
    const author = inputAuthor.value;
    const pages = inputPages.value;
    const read = inputYes.checked ? "Yes" : "No";

    addBookToLibrary(name, author, pages, read);
    displayBook();

    inputName.value = "";
    inputAuthor.value = "";
    inputPages.value = "";

    dialog.close();
});

const clearBtn = document.querySelector(".clear-display");

clearBtn.addEventListener("click", function() {
    myLibrary.length = 0;
    display.innerHTML = "";
});

// Initial display
displayBook();

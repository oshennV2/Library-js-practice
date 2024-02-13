const myLibrary =[]
const display = document.querySelector(".display")
const div = document.createElement("div")


function book(name , author, pages, read,){
    this.name = name
    this.author = author
    this.pages = pages
    this.read= read
}

function addBookToLibrary(name, author, pages, read) {
    const newBook = new book(name, author, pages, read);
    myLibrary.push(newBook);
}
function displayBook(){

    if (myLibrary.length > 1) {
        display.innerHTML =""
    }

    for (let index = 0; index < myLibrary.length; index++) {
        
        const book = myLibrary[index]

        const div = document.createElement("div")

        div.classList.add("card")
        div.style.height = "100px"
        div.style.width = "100px"
        div.style.backgroundColor = "red"
        div.textContent = `
        Name:${book.name}
        Author:${book.author}
        Pages:${book.pages}
        Read:${book.read}
        `
        display.appendChild(div)

    }
}



const newBtn = document.querySelector(".new-book-btn")
const dialog = document.querySelector("dialog")
const closeBtn= document.querySelector(".close-btn")
const subBtn = document.querySelector(".add-book-btn")

newBtn.addEventListener("click", function(){
    dialog.showModal()
})

closeBtn.addEventListener("click", function(){
    dialog.close()
})

subBtn.addEventListener("click", function(){

const inputName = document.getElementById("book-name")
const inputAuthor = document.getElementById("author-name")
const inputPages = document.getElementById("pages")
const inputYes = document.getElementById("yes")
const inputNo = document.getElementById("no")

const name = inputName.value
const author = inputAuthor.value
const pages= inputPages.value
var read = inputYes.value


if (inputYes.checked) {
  read = inputYes.value

} else{
    read = inputNo.value}




addBookToLibrary(name,author,pages,read)
displayBook()

inputAuthor.value=""
inputName.value=""
inputPages.value=""


dialog.close()

})


const clearBtn = document.querySelector(".clear-display")

clearBtn.addEventListener("click", function(){
    display.innerHTML=""
})
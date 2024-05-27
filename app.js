
///

const library = [];
const form = document.getElementById("form-container");
const addButton = document.querySelector(".addBook");
let container = document.querySelector(".container");
function Book(Title, Author, Pages, PubYear){//constructor

    this.Title = Title;
    this.Author = Author;
    this.Pages=Pages;
    this.PubYear = PubYear;


}

addButton.addEventListener('click', function(){

    form.classList.toggle("hidden");


});

function addBook(book){

    library.push(book);
    const bookDiv = document.createElement('div');
    bookDiv.className = "bookDiv";
    for(const key in book){
        if(book.hasOwnProperty(key)){//if book has this property
            const bookField = book[key];//grab value
            const bookContent = document.createElement('p');
            bookContent.className = key;
            bookContent.textContent = `${key}: ${bookField} `
            bookDiv.appendChild(bookContent);
            

        }


    }
    container.appendChild(bookDiv);
    

}

function printLib(){
console.log("The library contains: ")
console.log(library);

}

let book1 = new Book("Lord of the Rings", "J.R. Tolken", 540, 1955);
addBook(book1);
printLib();

//console.log("book info: " + book1.printTitle());

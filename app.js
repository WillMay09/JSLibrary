
///

const library = [];
const form = document.getElementById("form-container");
const addButton = document.querySelector(".addBook");
let container = document.querySelector(".container");
let modal = document.querySelector(".openModal");
function Book(Title, Author, Pages, PubYear){//constructor

    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.PubYear = PubYear;
    this.id = Date.now().toString();
    this.read = false;


}

// addButton.addEventListener('click', function(){

//     form.classList.toggle("hidden");


// });

function addBook(book){

    if(!book.id){//adds unique id to each book object by using date class, retrieving current time(milliseconds) and converting it to a string
        book.id = Date.now().toString();


    }

    library.push(book);
    const bookDiv = document.createElement('div');//create div dom element
    bookDiv.className = "bookDiv";//names div element
    for(const key in book){//for every key in the book object
        if(book.hasOwnProperty(key)){//if book has this property
            const bookField = book[key];//grab value
            const bookContent = document.createElement('p');
            bookContent.className = key;
            bookContent.textContent = `${key}: ${bookField} `
            bookDiv.appendChild(bookContent);
            

        }


    }
    //Creating Buttons on book Div
    const ButtonDiv = document.createElement('div');
    ButtonDiv.className = "buttonDiv";
    const readButton = document.createElement('button');
    readButton.className = 'readButton';
    readButton.textContent = "Read";
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Remove';
    ButtonDiv.appendChild(readButton);
    ButtonDiv.appendChild(deleteButton);
    bookDiv.appendChild(ButtonDiv);
    container.appendChild(bookDiv);

    addButtonFunctionality(readButton, deleteButton, book);
    

}


function addButtonFunctionality(readButton, deleteButton, book){

    readButton.addEventListener('click', ()=>{

        ///Mark the book as read
        if(book.read === 'false'){

            readButton.classList.add('readButton');
            readButton.classList.remove('notRead');
            book.read = 'true';


        }else{


            readButton.classList.remove('readButton');
            readButton.classList.add('notRead');
            book.read = 'false';
        }
        





        //Mark the book as not read





    });


    deleteButton.addEventListener('click', (event)=>{

        const bookDiv = event.target.closest('.bookDiv');//grabs closet ancestor with class .bookDiv
        const bookId = bookDiv.dataset.id;//grabs this id


        bookDiv.remove();

        //filter out book with id
        library = library.filter(book => book.id !== bookId);


    });


}

const submit = document.querySelector(".submitButton");

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let pubYear = document.getElementById('pubYear').value;
    let addedBook = new Book(title, author, pages, pubYear);
    addBook(addedBook);
    modal.close();
    
   
    






})


//setting up addBook Form

const addBookButton = document.querySelector(".addBook");
const closeButton = document.querySelector(".closeButton");

closeButton.addEventListener('click', () =>{


    modal.close();
})

addBookButton.addEventListener('click', ()=>{

    modal.showModal();


})

function printLib(){
console.log("The library contains: ")
console.log(library);

}

let book1 = new Book("Lord of the Rings", "J.R. Tolken", 540, 1955);
addBook(book1);
printLib();

//console.log("book info: " + book1.printTitle());

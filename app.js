
///

let library = [];
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

function Book(Title, Author, Pages, PubYear, url){//constructor

    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.PubYear = PubYear;
    this.id = Date.now().toString();
    this.read = false;
    this.url = url;


}


// addButton.addEventListener('click', function(){

//     form.classList.toggle("hidden");


// });

function loadTestData(){




}


function addBook(book){

    library.push(book);
    //Components of Book DOM element
  
    const bookDiv = document.createElement('div');
    bookDiv.className = "bookDiv";

    const bookContentDiv = document.createElement('div');
    bookContentDiv.className = "bookContentDiv";


    const imgDiv = document.createElement('div');
    imgDiv.className = 'imgDiv';

    //Populating bookContentDiv with book field items
    populateBookContent(book, bookContentDiv);

    //Adding an Image to the book object
    createImage(book, imgDiv);
    
    //Adding image and content items to bookDiv element
    bookDiv.appendChild(imgDiv);
    bookDiv.appendChild(bookContentDiv);
    //Creating Buttons on book Div
    createButtons(book, bookContentDiv);
   
    container.appendChild(bookDiv);

}

function createButtons(book, bookContentDiv){

    const ButtonDiv = document.createElement('div');
    ButtonDiv.className = "buttonDiv";
    const readButton = document.createElement('button');
    readButton.className = 'notRead';
    readButton.textContent = "Not Read";
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Remove';
    deleteButton.setAttribute('data-id', book.id);
    ButtonDiv.appendChild(readButton);
    ButtonDiv.appendChild(deleteButton);
    bookContentDiv.appendChild(ButtonDiv);
    addButtonFunctionality(readButton, deleteButton, book);




}

function createImage(book, imgDiv){
    const imgItem = document.createElement('img');
    imgItem.src = book.url;
    imgItem.alt = "default book logo"
    imgItem.width = 100;
    imgItem.height = 100;
    imgDiv.appendChild(imgItem);

    }

function populateBookContent(book, bookContentDiv){
    let counter = 0;
    for(const key in book){
        if(counter >= 4){
            break;

        }
        if(book.hasOwnProperty(key)){//if book has this property
            if(key === 'id' ||  key ==='read'){
                
                continue;
            }
                const bookField = book[key];//grab value
                const bookContent = document.createElement('p');
                bookContent.className = key;
                bookContent.textContent = `${key}: ${bookField} `
                bookContentDiv.appendChild(bookContent);

           
            

        }

        counter++;
    }


}

function checkImage(url){

    
    const defaultImage = 'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png'
    if(url === ""){

        return defaultImage;


    }else{


        return url.value.trim();
    }

}


function addButtonFunctionality(readButton, deleteButton, book){

    readButton.addEventListener('click', ()=>{

        ///Mark the book as read
        if(book.read === 'false'){
            readButton.innerText = 'Read';
            readButton.classList.add('readButton');
            readButton.classList.remove('notRead');
            book.read = 'true';


        }else{

            readButton.innerText = 'Not Read';
            readButton.classList.remove('readButton');
            readButton.classList.add('notRead');
            book.read = 'false';
        }
    });


    deleteButton.addEventListener('click', (event)=>{

        const bookDiv = event.target.closest('.bookDiv');//grabs closet ancestor with class .bookDiv
        const bookId = event.target.dataset.id;//grabs this id
        console.log(bookId);
        

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
    let url = document.getElementById('url').value;
    url = checkImage(url);
    let addedBook = new Book(title, author, pages, pubYear, url);
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

let book1 = new Book("Lord of the Rings", "J.R. Tolken", 540, 1955, 'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png');
addBook(book1);
printLib();

//console.log("book info: " + book1.printTitle());

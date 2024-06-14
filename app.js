
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


    //creating book div
    library.push(book);
    const bookDiv = document.createElement('div');//create div dom element
    const bookContentDiv = document.createElement('div');
    bookContentDiv.className = "bookContentDiv";
    bookDiv.className = "bookDiv";//names div element
    for(const key in book){//for every key in the book object
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


    }
    bookDiv.appendChild(bookContentDiv);

    //Adding an Image to the book object
    const imgUrl = checkImage();
    const imgItem = document.createElement('img');
    imgItem.src = checkImage();
    imgItem.alt = "default book logo"
    imgItem.width = 100;
    imgItem.height = 100;
    const imgDiv = document.createElement('div');
    imgDiv.className = 'imgDiv';
    imgDiv.appendChild(imgItem);
    bookDiv.appendChild(imgDiv);



    


    //Creating Buttons on book Div
    const ButtonDiv = document.createElement('div');
    ButtonDiv.className = "buttonDiv";
    const readButton = document.createElement('button');
    readButton.className = 'notRead';
    readButton.textContent = "Not Read";
    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Remove';
    ButtonDiv.appendChild(readButton);
    ButtonDiv.appendChild(deleteButton);
    bookDiv.appendChild(ButtonDiv);
    container.appendChild(bookDiv);

    addButtonFunctionality(readButton, deleteButton, book);
    

}

function checkImage(){

    const url = document.getElementById('url').value;
    const defaultImage = 'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png'
    if(url.trim() ==''){

        return defaultImage;


    }else{


        return url.value;
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

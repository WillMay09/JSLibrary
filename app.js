
///
function Book(name, author, pages, pubYear){

    this.name = name;
    this.author = author;
    this.pages=pages;
    this.pubYear = pubYear;

    this.printTitle = function() {

        return (this.name +', ' + this.author + ', ' + this.pages +', ' + this.pubYear);
    }

}

let book1 = new Book("Lord of the Rings", "J.R. Tolken", 540, 1955);

console.log("book info: " + book1.printTitle());

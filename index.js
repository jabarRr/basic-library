const myLibrary = [];

function Book (title , author ,numOfPages, readStatus){
    if (!new.target){
        throw Error('Must be called using "new" operator');
    }

    
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readStatus = readStatus;
    

    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.readStatus} `);
    }
}

function addBookToLibrary(array,bookTitle, bookAuthor, bookPages, readStatus){
     // take params, create a book then store it in the array
    const newBook = new Book(bookTitle, bookAuthor,bookPages, readStatus);
    array.push(newBook);



    console.log("The Library", array);
    console.log(newBook.info());
}



const addBookBtn = document.querySelector(".addBookBtn");
const popUpDiv = document.querySelector(".popUpDiv");
const sumbitBtn = document.querySelector(".submitBtn");


addBookBtn.addEventListener("click", function(e){
    console.log("Button is clicked");
    if (popUpDiv.style.visibility != "visible"){
        popUpDiv.style.visibility = "visible";
    }
    else{
        popUpDiv.style.visibility = "hidden";
    }

});

sumbitBtn.addEventListener("click", function(e){
    bookTitle = document.querySelector("#bookTitle").value;
    bookAuthor = document.querySelector("#bookAuthor").value;
    bookPages = document.querySelector("#numOfPages").value;
    readStatus = document.querySelector("#readStatus").value;
    addBookToLibrary(myLibrary, bookTitle, bookAuthor, bookPages, readStatus);


    
    console.log("Total Library", myLibrary);
    popUpDiv.style.visibility = "hidden";
});


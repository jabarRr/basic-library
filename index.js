const myLibrary = [];
let ticker = 0;



class Book {

    constructor (title, author , numOfPages, readStatus){
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.readStatus = readStatus;
        this.uniqueId = crypto.randomUUID()
    }
    changeReadStatus (){
        if (this.readStatus == "read"){
        this.readStatus = "not read" 
        }
        else if (this.readStatus != "read"){
            this.readStatus = "read";
        } 

    }
}


class addBookToLibrary {

    constructor (array,bookTitle, bookAuthor, bookPages, readStatus){
        const newBook = new Book(bookTitle, bookAuthor,bookPages, readStatus);
        array.push(newBook);

    }
}



let loopCounter = 0;

class displayBook {

    constructor(arrOfBooks){
    const createBtn = document.createElement("button");
    const createAnotherBtn = document.createElement("button");

    
    let indexSelectedBook = arrOfBooks.length - 1;
    let selectedBook = arrOfBooks[indexSelectedBook]; // Index Position Of Selected Book
    console.log("Selected Book", selectedBook);


    let currentBookRow = tableRef.insertRow(-1);
    let currentCellIndex = 0;

    for (const prop in selectedBook){ // Each Prop In Boo
        console.log("Selected Book: " , selectedBook);
        console.log("Prop", prop);
        if (Object.prototype.hasOwnProperty.call(selectedBook, prop)){


            console.log("Current Prop: ", prop);
            
            let newCell = currentBookRow.insertCell(currentCellIndex);
            const newCellContent = selectedBook[prop];
            newCell.append(newCellContent);
            currentCellIndex ++;
        }
       
        }    

        let newCell = currentBookRow.insertCell(currentCellIndex);
        if (selectedBook.readStatus == "read"){
            console.log("its read");
            createBtn.textContent = "Toggle Read Status";
            createBtn.className = "readToggle";
            
        }
        else if (selectedBook.readStatus != "read"){
            createBtn.textContent = "Toggle Read Status";
            createBtn.className = "readToggle";
        

        }
        newCell.append(createBtn);
        
        
        currentCellIndex++;
        newCell = currentBookRow.insertCell(currentCellIndex);

        createAnotherBtn.textContent = "Remove Book"
        createAnotherBtn.className = "removeBook"
       
        newCell.append(createAnotherBtn);



    }

}


const tableRef  = document.querySelector(".bookSection");


const addBookBtn = document.querySelector(".addBookBtn");
const popUpDiv = document.querySelector(".popUpDiv");
const sumbitBtn = document.querySelector(".submitBtn");
const bookSection = document.querySelector(".bookSection");


const newBookRow = document.createElement("tr");



const newBookData = document.createElement("td");
// Demo Books New Table Row with Tb data for each paramater;

new addBookToLibrary(myLibrary, "book1" , "author1" , 50, "read");
new displayBook(myLibrary);
new addBookToLibrary(myLibrary, "boo2" , "author2" , 150, "unread");
new displayBook(myLibrary);
new addBookToLibrary(myLibrary, "book3" , "author3" , 678, "read");
new displayBook(myLibrary);







tableRef.addEventListener("click", (e) => {
    let tableRowLs = tableRef.querySelectorAll("tr");
    let tableRowCount = tableRef.childElementCount;
    
    console.log("Tbl Row Count", tableRowCount);
    if (e.target.classList.contains("readToggle")) {  
        const currentRow = e.target.parentElement.parentElement; // Gets the current Row of The Button
        const currentRowLs = currentRow.childElementCount;
        
        console.log("Clicked:", currentRow);

        for (let i =0; i < tableRowCount; i++){

            console.log("");
            console.log("tableRowlist I: ", tableRowLs[i]);
            console.log("current row =", currentRow);
            console.log("");
            

            if (tableRowLs[i] == currentRow){
                console.log(`This is the ${i} Row`);

                const tableCellLs = currentRow.querySelectorAll("td"); 

                console.log("cell list", tableCellLs);

                let currentObj = myLibrary[i];
                console.log("Current Object", currentObj);

                currentObj.changeReadStatus();
               
                let updatedReadCellSelect = tableCellLs[3];

                console.log("Selected Cell: ", updatedReadCellSelect);
                updatedReadCellSelect.textContent = currentObj.readStatus;

                console.log("New Current Object", currentObj);
            }

        }
    }
    if (e.target.classList.contains("removeBook")){
        console.log("Delete Button Clicked");
        const currentRow = e.target.parentElement.parentElement;
        const currentRowLs = currentRow.childElementCount;

        const tableCellLs = currentRow.querySelectorAll("td");
        
        for (let i = 0; i < currentRowLs; i++){
           

            console.log("Selected Cell", tableCellLs[i]);
            currentRow.removeChild(tableCellLs[i])

            let childrenLeft = currentRow.childElementCount;
            
            console.log("child count", childrenLeft);

            if (childrenLeft == 0){
                tableRef.removeChild(currentRow);
            }
            //currentRow.deleteCell(i);
            //console.log("selected Cell again: ", tableCellLs[i]);

        }
        
    }
});





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
    new addBookToLibrary(myLibrary, bookTitle, bookAuthor, bookPages, readStatus);


    new displayBook(myLibrary);


   
    


    console.log("Total Library", myLibrary);
    popUpDiv.style.visibility = "hidden";
});

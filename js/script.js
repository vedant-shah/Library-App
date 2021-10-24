console.log("Welcome to the Student Library");

function newBook(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
}

class Display {
    constructor() {}
    add(book) {
        console.log('Adding a Book!');
        let tbody = document.getElementById('tbody')
        let html = `<tr>  
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
      </tr>
                    `;

        tbody.innerHTML += html;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();

    }
    validate(book) {
        console.log(book.bookname)
        if (book.name.length < 2 || book.author.length < 2)
            return false;
        else
            return true;
    }
    show(type,message) {
        let showmessage = document.getElementById('message');
        showmessage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message:</strong> ${message}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
        setTimeout(() => {
            showmessage.innerHTML ='';
        }, 2000);
                                    
    }
}


let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    // console.log('entering')
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let educational = document.getElementById('educational');
    let misc = document.getElementById('miscellaneous');
    let genre;

    if (fiction.checked) {
        genre = fiction.value;
    } else if (educational.checked) {
        genre = educational.value;
    } else(misc.checked)
    genre = misc.value;

    let book = new newBook(name, author, genre);
    // console.log(book)
    // localStorage.setItem(JSON.stringify(book));
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success","Your book has been successfully added!")

    } else {
        // show an error to the user 
        display.show("danger", "Kindly enter valid options in the fields above")
    }
    e.preventDefault();
}
document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
  
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
        .then(res => res.json())
        .then(bookData => renderBooks(bookData))
};

function renderBooks(bookData) {
  const main = document.querySelector("main");
  
  bookData.forEach(book => {
    const h3= document.createElement("h3");
    h3.textContent = book.name;
    main.appendChild(h3);
  })
  

}

















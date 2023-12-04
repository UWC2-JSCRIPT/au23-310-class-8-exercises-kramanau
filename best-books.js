const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists';
const booksEl = document.getElementById('books-container');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const children = booksEl.children;
  while(children.length){
    booksEl.removeChild(children[0]);
  };

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  const url = `${BASE_URL}/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;
  fetch(url).then(function(data) {
    return data.json();
  })
  .then((responseJson) => {
    const top5 = responseJson.results.books.slice(0,5);

    top5.forEach((book) => {
      const newEl = document.createElement('div');
      const titleEl = document.createElement('h3');
      titleEl.appendChild(document.createTextNode(`#${book.rank} ${book.title}`));
      const bookImg = document.createElement('img');
      bookImg.src = book.book_image;

      const authorEl = document.createElement('p');
      authorEl.appendChild(document.createTextNode(`Author: ${book.author}`));
      authorEl.style.fontSize = "10px";

      const descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(`Description: ${book.description}`));
      descriptionEl.style.fontSize = "10px";

      newEl.appendChild(titleEl);
      newEl.appendChild(bookImg);
      newEl.appendChild(authorEl);
      newEl.appendChild(descriptionEl);
      booksEl.appendChild(newEl);
    })

  });

});

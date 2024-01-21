// Create an array of objects representing books with properties like title, author, genre, and publishedYear.

const books = [
  {
    title: "Quran",
    author: "Allah",
    genre: "islamic",
    publishedYear: 610,
  },
  {
    title: "Sahih al-Bukhari",
    author: "Muhammad al-Bukhari",
    genre: "islamic",
    publishedYear: 846,
  },
  {
    title: "Sahih Muslim",
    author: "Imam Muslim ibn al-Hajja",
    genre: "islamic",
    publishedYear: 900,
  },
  {
    title: "Ar-Raheeq Al-Makhtum",
    author: "Safiur Rahman",
    genre: "islamic",
    publishedYear: 1979,
  },
  {
    title: "Riyad-Us-Saliheen",
    author: "Imam Yahya bin Sharf",
    genre: "islamic",
    publishedYear: 631,
  },
  {
    title: "Paradoxical Sajid",
    author: "Arif Azad",
    genre: "islamic",
    publishedYear: 2021,
  },
];
// Implement a function that filters books published after a specific year.
function filterBooksByYear(year) {
  const filteredArr = [];
  books.filter((book) => {
    if (book["publishedYear"] > year) {
      filteredArr.push(book);
    }
  });
  console.log(filteredArr);
  // Implement a function that maps the filtered books to create an array of book titles and authors.
  const titleAndAuthorArr = [];
  filteredArr.map((book) => {
    titleAndAuthorArr.push(book.title, book.author);
  });
  console.log(titleAndAuthorArr);
}
filterBooksByYear(900);

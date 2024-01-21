const books = [
  {
    book: "Sahih al-Bukhari",
    rating: 5,
  },
  {
    book: "Sahih Muslim",
    rating: 5,
  },
  {
    book: "Ar-Raheeq Al-Makhtum",
    rating: 5,
  },
  {
    book: "Riyad-Us-Saliheen",
    rating: 5,
  },
  {
    book: "Paradoxical Sajid",
    rating: 0,
  },
];
// Calculating Average Rating
const averageRating = books.reduce((acc, curr, i, arr) => {
  acc += curr.rating;
  if (i === arr.length - 1) {
    acc /= arr.length;
  }
  return acc;
}, 0);

console.log(averageRating);

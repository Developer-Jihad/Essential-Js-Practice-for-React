// Concatenate values of a specific property in an array of objects using the reduce method.

const comments = [
  {
    comment: "Sahih al-Bukhari",
  },
  {
    comment: "Sahih Muslim",
  },
  {
    comment: "Ar-Raheeq Al-Makhtum",
  },
  {
    comment: "Riyad-Us-Saliheen",
  },
  {
    comment: "Paradoxical Sajid",
  },
];

const ConcatenatStrings = comments.reduce((acc, curr) => {
  return (acc += curr.comment);
}, "");

console.log(ConcatenatStrings);

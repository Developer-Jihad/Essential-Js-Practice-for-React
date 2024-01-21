// Log the keys and values of an object from the fetched data
/* const userData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  for (const key in data) {
    console.log(`${key} : ${data[key]}`);
  }
};
userData(); */

// ------------------------------------------------------------------------

// Add and Remove an item to a  n array in the fetched data.
const userComment = async () => {
  const myObj = {
    name: "Jihad",
    age: 24,
  };
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  const newData = data.slice(0, 5);
  // Add a new item to an array in the fetched data.
  newData.unshift(myObj);
  console.log(newData);
  // Remove an item from an array in the fetched data.
  newData.pop();
  console.log(newData);
};
userComment();

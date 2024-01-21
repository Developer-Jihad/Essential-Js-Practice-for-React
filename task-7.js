const person = {
  name: "Jihad",
  age: 24,
};
// Store a simple object in local storage.
localStorage.setItem("user", JSON.stringify(person));

// Retrieve and log the object from local storage.
console.log(JSON.parse(localStorage.getItem("user")));

// Clear the local storage.
localStorage.clear();

// Repeat the above steps using session storage.
sessionStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(sessionStorage.getItem("user")));
sessionStorage.clear();

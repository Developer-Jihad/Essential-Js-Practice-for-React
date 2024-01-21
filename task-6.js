// Create a function that checks if a given variable is truthy or falsy and logs a message accordingly.
let a = undefined;

function checkValue(value) {
  if (value) {
    return `${value} is a Truthy Value.`;
  } else {
    return `${value} is a Falsy Value.`;
  }
}
console.log(checkValue(a));

// Use the ternary operator to check if a number is even or odd.
let num = 5;
console.log(num % 2 ? "this is an Odd Number" : "this is an Even Number");

// Use short-circuiting with the && operator to log a message only if a condition is true.
let value = 5;
if (value && value > 5) {
  console.log(`This is ${value}`);
} else {
  console.log("The Condition does not Matched");
}

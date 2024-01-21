const arr = [1, 8, 5, 6, 2, 4, 9, 7, 5, 9, 3, 7];

// Use the map method to square each number.
const mapMethod = arr.map((num) => num ** 2);
console.log(mapMethod);

// Use the find method to find the first number greater than 5.
const findMethod = arr.find((num) => num > 5);
console.log(findMethod);

// Use the filter method to filter out even numbers.
const filterMethod = arr.filter((num) => !(num % 2));
console.log(filterMethod);

// Use the forEach method to log each number to the console.
const forEackMethod = arr.forEach((num) => console.log(num));

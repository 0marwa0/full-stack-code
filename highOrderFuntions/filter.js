//Create a function that takes an array of integers and returns a new array containing only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//numbers%2==0
let f1 = numbers.filter((number) => {
  return number % 2 == 0;
});
console.log(f1);
// // Test the function
// console.log(filterEvenNumbers(numbers));

//Given an array of objects, create a function that filters the objects based
//on a specific property value. Return a new array containing only the objects whose property matches the given parameter.
const fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Cherry", color: "red" },
  { name: "Date", color: "brown" },
];

function filterFruitsByColor(fruits, color) {
  return fruits.filter((item) => item.color === color);
}

//   // Test the function
console.log(filterFruitsByColor(fruits, "red"));

//Create a function that filters an array of strings and returns a new array containing only the strings whose length is greater than a given parameter.

const words = ["hello", "world", "programming", "JavaScript", "short"];

// function filterLongWords(words, minLength) {
//   // Implement your solution here
// }

// // Test the function
// console.log(filterLongWords(words, 7));

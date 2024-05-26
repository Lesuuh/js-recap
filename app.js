// control

// 1. WHILE LOOP
// while (condition) {run this code}
// let age = prompt("Please enter your age");

// while (age < 18) {
//   prompt("You must be above 18 to view this site");
//   document.write("Welcome to out site");
// }

// let create a counter

// let counter = 0;

// while (counter <= 1000) {
//   console.log(counter);
//   counter = counter + 1;
// }

// 2. DO...WHILE LOOP

// let number = prompt("Enter a number");

// do {
//   console.log("First time");
// } while (number < 18);

// 3. FOR LOOP

// for(initialization; condition; incrementaion) {run the code}
// for (let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }

// EXAMPLES
// const scores = [20, 30, 40, 50, 80, 90, 10, 18, 24, 67];

// // log to the console scores that are less than 50

// for (i = 0; i < scores.length; i++) {
//   if (scores[i] % 2 === 0) {
//     console.log(scores[i]);
//   }
// }

// FUNCTIONS
// a statement, as an expression, as an arrow function, and using the Function constructor.

// 1. Statement - main charateristics is that you can call the function before been declared
// function print(num1, num2) {
//   return num1 + num2;
// }

// function updateProduct(product) {
//   product.title = "you dont know javascript";
// }

// let product = {
//   title: "YDKJS",
//   author: "xnight",
// };

// console.log(product.title);
// updateProduct(product);
// console.log(product.title);

// function updateProduct(product){
//     product.Title = 'Updated Book';
// }

// let product = {
//     Id:1,
//     Title:'Book',
//     Price: 30
// };

// console.log(product.Title); // Book
// updateProduct(product);
// console.log(product.Title); // Updated Book

// factorial function

// function factorial(n) {
//   if (n < 1) return undefined;

//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// const result = factorial(4);
// console.log(result);

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// document.write(add(1, 4));

// const subtract = function (num1, num2) {
//   return num1 - num2;
// };

// ARRAYS AND OBJECT DESTRUCTURING : SPREAD AND REST OPERATOR

// const scores = [20, 50, 60, 40, 80, 12];

// let score1 = scores[0]
// let score2 = scores[1]
// let score3 = scores[2]

// let [score1, score2, ...restScores] = scores;

// const newScores = [...scores];
// newScores[0] = 100;

// console.log(scores);
// console.log(newScores);

// ARRAY METHODS
// 1. filter()

// const numbers = [2, 3, 5, 6, 8, 7, 4, 1];

// const removeEvenNumbers = (curr, index) => {
//   if (curr % 2 != 0) return true;
// };

// const oddNumbers = numbers.filter(removeEvenNumbers);

// console.log(oddNumbers);

// 2. reduce()

// const scores = [2, 3, 5, 8];

// const aggregate = (accum, curr) => {

//   accum = accum + curr;
//   return accum;
// };

// sumOfScores = scores.reduce(aggregate, 0);

// console.log(sumOfScores);

// 3. map

// const scores = [5, 9, 7, 66, 2, 96];

// const mutltifplyBy2 = scores.map((score) => {
//   return score * 2;
// });

// console.log(mutltifplyBy2);

// const fruits = ["mango", "apples", "pine", "cocoa"];
// // 3. push - adds value to an array from the back and returns the lenght
// console.log(fruits.push("pawpaw"));

// // 4. unshift - adds value to an array from the front and return the lenght
// console.log(fruits.unshift("lime"));

// // 5. shift
// console.log(fruits.shift());

// // 6. pop - removes the last element from an array and returns it
// console.log(fruits.pop());

// // 7. splice - add or remove an element from the array, with indexing and return the entire array with the element in it
// console.log(fruits.splice(0, "orange", 1))

// {
//     JavaScript provides a rich set of array methods that are frequently used for various operations. Here are some of the most common array methods along with brief descriptions and examples:

// ### 1. `push()`
// Adds one or more elements to the end of an array and returns the new length of the array.

// ```javascript
// let arr = [1, 2, 3];
// arr.push(4); // arr is now [1, 2, 3, 4]
// ```

// ### 2. `pop()`
// Removes the last element from an array and returns that element.

// ```javascript
// let arr = [1, 2, 3];
// let lastElement = arr.pop(); // lastElement is 3, arr is now [1, 2]
// ```

// ### 3. `shift()`
// Removes the first element from an array and returns that element.

// ```javascript
// let arr = [1, 2, 3];
// let firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]
// ```

// ### 4. `unshift()`
// Adds one or more elements to the beginning of an array and returns the new length of the array.

// ```javascript
// let arr = [1, 2, 3];
// arr.unshift(0); // arr is now [0, 1, 2, 3]
// ```

// ### 5. `map()`
// Creates a new array with the results of calling a provided function on every element in the calling array.

// ```javascript
// let arr = [1, 2, 3];
// let newArr = arr.map(x => x * 2); // newArr is [2, 4, 6]
// ```

// ### 6. `filter()`
// Creates a new array with all elements that pass the test implemented by the provided function.

// ```javascript
// let arr = [1, 2, 3, 4];
// let evenArr = arr.filter(x => x % 2 === 0); // evenArr is [2, 4]
// ```

// ### 7. `reduce()`
// Executes a reducer function on each element of the array, resulting in a single output value.

// ```javascript
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum is 10
// ```

// ### 8. `forEach()`
// Executes a provided function once for each array element.

// ```javascript
// let arr = [1, 2, 3];
// arr.forEach(x => console.log(x)); // Logs 1, 2, 3
// ```

// ### 9. `find()`
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns `undefined`.

// ```javascript
// let arr = [1, 2, 3, 4];
// let found = arr.find(x => x > 2); // found is 3
// ```

// ### 10. `findIndex()`
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns `-1`.

// ```javascript
// let arr = [1, 2, 3, 4];
// let index = arr.findIndex(x => x > 2); // index is 2
// ```

// ### 11. `includes()`
// Determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

// ```javascript
// let arr = [1, 2, 3];
// let hasTwo = arr.includes(2); // hasTwo is true
// ```

// ### 12. `slice()`
// Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included).

// ```javascript
// let arr = [1, 2, 3, 4];
// let subArr = arr.slice(1, 3); // subArr is [2, 3]
// ```

// ### 13. `splice()`
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// ```javascript
// let arr = [1, 2, 3, 4];
// arr.splice(2, 1, 'a'); // arr is now [1, 2, 'a', 4]
// ```

// ### 14. `concat()`
// Merges two or more arrays. This method does not change the existing arrays but returns a new array.

// ```javascript
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2); // newArr is [1, 2, 3, 4]
// ```

// ### 15. `join()`
// Joins all elements of an array into a string and returns this string.

// ```javascript
// let arr = [1, 2, 3];
// let str = arr.join('-'); // str is "1-2-3"
// ```

// ### 16. `reverse()`
// Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// ```javascript
// let arr = [1, 2, 3];
// arr.reverse(); // arr is now [3, 2, 1]
// ```

// ### 17. `sort()`
// Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings and comparing their sequences of UTF-16 code unit values.

// ```javascript
// let arr = [3, 1, 4, 2];
// arr.sort(); // arr is now [1, 2, 3, 4]
// ```

// These methods cover a wide range of operations and are essential tools for manipulating arrays in JavaScript.
// }

// OBJECTS
// const user = {
//   name: "xnight",
//   age: 17,
//   complexion: "dark",
//   height: "5'11",
// };

// // create
// user.weight = "60kg";

// // update value
// user.age = 19;

// // delete value
// delete user.complexion

// // read value from object
// console.log(user);

// PUTTING IT ALL TOGETHER

// 1. program to convert human being age to rabbits age

// const humanAge = prompt("Please enter your age");

// function convertAge(humanAge) {
//   const rabbitAge = +humanAge * 5;
//   return rabbitAge;
// }

// const rabbitAge = convertAge(humanAge);
// alert(`You are ${rabbitAge} years old in the rabbit kingdom`);

// a bmi converter

// const weight = prompt("Enter your weight in kilogram");
// const height = prompt("Enter your height in meters");

// function BMIConverter(weight, height) {
//   const result = weight / height;
//   return result;
// }

// let bmi = BMIConverter(weight, height);

// if (bmi < 18) {
//   console.log(bmi + "your are underweight");
// } else if (bmi >= 18 && bmi < 25) {
//   console.log(bmi + "you are normal");
// } else if (bmi >= 25) {
//   console.log(bmi + "your are obsese");
// }

// guessing game

// document.addEventListener("DOMContentLoaded", (e) => {
//   const modal = document.getElementById("modal");
//   const modalResult = document.getElementById("modal-result");
//   const startButton = document.getElementById("start-button");
//   const overlay = document.getElementById("overlay");
//   const inputField = document.getElementById("input");
//   const enterButton = document.getElementById("enter-button");
//   let attempt = document.getElementById("attempts");
//   const result = document.getElementById("result");
//   const playAgain = document.getElementById("play-again");

//   let attempts = 0;
//   let secret;

//   let min = 1;
//   let max = 10;

//   modal.style.display = "flex";
//   overlay.style.display = "flex";

//   startButton.addEventListener("click", () => {
//     modal.style.display = "none";
//     overlay.style.display = "none";
//     attempts = 0;
//     result.textContent = "Your Result will display here";
//     attempt.textContent = "Attempts:" + attempts;

//     secret = getRandomNumber(max, min);
//     console.log(secret);
//   });

//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   enterButton.addEventListener("click", () => {
//     if (inputField.value === "") {
//       alert("Please enter a value");
//       return;
//     }
//     attempts++;
//     attempt.textContent = `Attempts: ${attempts}`;
//     console.log(attempt);

//     if (Number(inputField.value) === secret) {
//       modalResult.style.display = "flex";
//       result.textContent = `Congratulations, secret code is ${secret}, you did it after ${attempt.innerText}`;
//       result.style.color = "#fff";
//     } else {
//       result.textContent = "Try again";
//     }
//   });

//   playAgain.addEventListener("click", () => {
//     modalResult.style.display = "none";
//     secret = getRandomNumber(10, 1);
//     attempts.textContent = 0;
//     attempts = 0;
//     console.log(secret);
//   });
// });

// COUNTDOWN

// let x = setInterval(() => {
//   let countDownDate = new Date("May 26, 2025 00:00:00").getTime();
//   let currentDate = new Date().getTime();

//   let distance = countDownDate - currentDate;
//   let days = document.querySelector("#day");
//   let hours = document.querySelector("#hours");
//   let minutes = document.querySelector("#minutes");
//   let seconds = document.querySelector("#seconds");

//   let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let second = Math.floor((distance % (1000 * 60)) / 1000);

//   days.innerText = day;
//   hours.innerText = hour;
//   minutes.innerText = minute;
//   seconds.innerText = second;

//   if (distance < 0) {
//     clearInterval(x);
//     alert("Milestone reached");
//   }
// }, 1000);

// IPHONE

document.addEventListener("DOMContentLoaded", () => {
  const notifyBar = document.querySelector(".bar");
  const airpods = document.querySelector(".airpods");
  const textContent = document.querySelector(".text-content")
  console.log(airpods);


  notifyBar.addEventListener("click", (event) => {
    if (notifyBar.classList.contains("expanded")) {
      textContent.style.display = "none"
      airpods.style.width = "16px";
      airpods.style.height = "16px";
      notifyBar.classList.remove("expanded");

    } else {
      textContent.style.display = "flex"
      airpods.style.width = "40px";
      airpods.style.height = "25px";
      notifyBar.classList.add("expanded");

    }

    event.stopPropagation();
  });
});

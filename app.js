// Q1:
// Write a function named createList that takes in an array of the current store intentory.

// The inventory is formatted like this:
// [
//   { name: 'apples', available: true },
//   { name: 'pears', available: true },
//   { name: 'oranges', available: false },
//   { name: 'bananas', available: true },
//   { name: 'blueberries', available: false }
// ]

// This function should use forEach to populate your grocery list based on the store's inventory.
//  If the item is available, add it to your list. Return the final list.
let storeInventory = [
  { name: "apples", available: true },
  { name: "pears", available: true },
  { name: "oranges", available: false },
  { name: "bananas", available: true },
  { name: "blueberries", available: false },
];
let finalList = [];
function createList(arr) {
  arr.forEach((element) => {
    if (element.available) finalList.push(element);
  });
  return finalList;
}
console.log(createList(storeInventory));

// Q2:
// Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

// For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
/*let arrNum = [2, 4, 5, 7];
function evenOdd(arrNum) {
  function or(arrNum) {
    if (arrNum % 2 == 0) {
      return "even";
    } else if (arrNum % 2 !== 0) {
      return "odd";
    }
  }
  const result = arrNum.map(or);
  console.log(result);
}*/
function evenOdd(arr) {
  return arr.map((element) => {
    if (isNaN(element)) {
      return "N/A";
    } else {
      return element % 2 == 0 ? "even" : "odd";
    }
  });
}
console.log(evenOdd([0, 5, 8, "c"]));

// Q3:
// Write a function named notInFirstArray that, given two arrays as input,
//  uses filter to return an array of all the elements in the second array that are not included in the first array.

// For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].

function notInFirstArray(arr1, arr2) {
  let count = 0;
  const newArray = [];
  arr2.filter((element) => {
    if (element != arr1[count]) {
      newArray.push(element);
    }
    count++;
  });
  return newArray;
}
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4];
console.log(notInFirstArray(arr1, arr2));

// Q4:
// Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

// Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
function reverseString(string) {
  const array = string.split("");

  const reversedString = array.reduce((reversed, character) => {
    return character + reversed;
  }, "");

  return reversedString;
}
console.log(reverseString("obaida"));
// Q5:
// Write a function named isNum that takes in a string or number of any length.
// This function should use a regular expression pattern to return true if the input contains a number,
//  and false if the input does not contain a number.

// For example:
// 12345 returns true
// '12345' returns true
// 'h3llo world' returns true
// 'hello world' returns false

function isNum(input) {
  let pattern = /[0-9]/;
  console.log(pattern.test(input));
}
isNum("0Abeer");
// Q6:
// You have created a game application and begin by asking users an easy question: In which month is Halloween?

// Write a function named matchMonth which uses a regular expression pattern to match any of these
// inputs: October, Oct, october, oct

// If the user enters any of these four inputs, return true. For any other input, return false.

let answer = prompt("In which month is Halloween?", "");
const regex = new RegExp("Oct", "i");
console.log(regex.test(answer));

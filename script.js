// TEMPLATE LITERALS

function print(firstName) {
  console.log(`Hello ${firstName}`);
}
print("John");

function createEmail(firstName, price) {
  let shipping = 5.95;
  console.log(`Hi ${firstName}! Thanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}`);
}

createEmail("John", 100);

// SEARCHING STRINGS

const planet = "Earth";

console.log(planet.startsWith("ear")); // false
console.log(planet.startsWith("Ear")); //true

console.log(planet.endsWith("th")); // true
console.log(planet.endsWith("s")); // false

console.log(planet.includes("s")); // false
console.log(planet.includes("h")); // true

console.log(planet.search("h")); // 4 - identifies the index or the location in the string
console.log(planet.search("Ear")); // 0 - it finds the first instance of the search string Ear, even if it's present more than once

// USING SYMBOLS

const id = Symbol();

const object = {
  title: "JavaScript",
  topics: ["arrays", "objects", "functions"],
  id: "1",
};

object[id] = 41285;

console.log(object); // {title: "JavaScript", topics: Array(3), id: "1", Symbol(): 41285}

// MAPS

let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

console.log(course); // {"react" => {…}, "jest" => {…}}
console.log(course.react); // undefined
console.log(course.get("react")); // {description: "ui"}
console.log(course.size); // 2

let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "react", "node"] }],
  ["items", [1, 2]],
]);

console.log(details); // {Sun Apr 11 2021 18:59:58 GMT+0300 (Москва, стандартное время) => "today", 2 => {…}, "items" => Array(2)}

// SET

let books = new Set();

books.add("Pride and Prejudice");
books.add("War and Peace");

console.log(books); // {0: "Pride and Prejudice", 1: "War and Peace"}
console.log(books.size); // 2
console.log(books.has("Oliver Twist")); // false
books.delete("Pride and Prejudice");

books.forEach(function (item) {
  console.log(item); // War and Peace
});

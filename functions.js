// REPEAT

let yell = "wow!";

let party = yell.repeat(5);
console.log(party); // wow!wow!wow!wow!wow!

// SETTING DEFAULT FUNCTION PARAMETERS

function haveFun(activityName = "hiking", time = 3) {
  console.log(`Today I will go to ${activityName} for ${time} hours`);
}
haveFun("biking", 3); // Today I will go to biking for 3 hours
haveFun(); // Today I will go to undefined for undefined hours --- in case we don's set default parameters
haveFun(); // Today I will go to hiking for 3 hours --- in case we set default parameters

// ARROW FUNCTIONS

let list = ["banana", "apple", "pear"];

// using function declaration
list.map(function (item) {
  console.log(item);
});
list.map((item) => console.log(item)); // using arrow function

// GENERATORS

function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
}
let countdown = director();
console.log(countdown.next()); // {value: "Three", done: false}
console.log(countdown.next().value); // Two
console.log(countdown.next().value); // One
console.log(countdown.next().value); // Action
console.log(countdown.next()); // {value: undefined, done: true}

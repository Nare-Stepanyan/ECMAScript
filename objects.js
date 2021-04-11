// SPREAD OPERATOR

const daytime = {
  breakfast: "meal",
  lunch: "butter",
};

const nighttime = "cheese";

const meals = {
  daytime,
  nighttime,
};

console.log(meals); // {daytime: {…}, nighttime: "cheese"}

const meals2 = {
  ...daytime,
  nighttime,
};

console.log(meals2); // {breakfast: "meal", lunch: "butter", nighttime: "cheese"}

// DESTRUCTURING OBJECTS

const vacation = {
  destination: "Los Angeles",
  travelers: 2,
  activity: "skiing",
  cost: "so much",
};

function marketing({ destination, activity }) {
  return `Come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation)); // Come to Los Angeles and do some skiing

// FOR OF LOOP  -- STRING -- ARRAY -- MAP --SET

for (let letter of "JavaScript") {
  console.log(letter);
}

let topics = ["JavaScript", "React", "Node"];

for (let topic of topics) {
  console.log(topic);
}

let lessons = new Map();

lessons.set("HTML", "/lesson/html");
lessons.set("CSS", "/lesson/css");
lessons.set("JavaScript", "/lesson/javascript");

for (let lesson of lessons) {
  console.log(lesson); // ["HTML", "/lesson/html"], ["CSS", "/lesson/css"], ["JavaScript", "/lesson/javascript"]
}

// CLASSES

class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels`);
  }
}

let newVehicle = new Vehicle("new car", 4);
newVehicle.describeYourself(); // I am a new car with 4 wheels

// INHERITANCE

class semiVehicle extends Vehicle {
  constructor() {
    super("semi vehicle", 4);
  }
}

let newSemiVehicle = new semiVehicle();
newSemiVehicle.describeYourself(); // I am a semi vehicle with 4 wheels

// GETTING AND SETTING CLASS VALUES

class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcLength()} hours`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const hiking = new Hike(10, 2);

console.log(hiking.lengthInHours); // 5 hours

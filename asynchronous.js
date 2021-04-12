// BUILDING PROMISES

const delay = (seconds) =>
  new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
      reject(new Error("Seconds must be a number"));
    }
    setTimeout(resolve, seconds * 1000);
  });

console.log("0 sec");
delay(3).then(() => console.log("3 secs")); // 3 secs
delay("three").then(() => console.log("3 seconds")); // asynchronous.js:6 Uncaught (in promise) Error: Seconds must be a number

// LOADING REMOTE DATA WITH PROMISES

const spacePeople = () => {
  return new Promise((resolve, reject) => {
    const api = "http://api.open-notify.org/astros.json";
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      if (request.status === 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = (err) => reject(err);
    request.send();
  });
};

spacePeople().then(
  (spaceData) => console.log(spaceData), // {message: "success", number: 10, people: Array(10)}

  (err) => console.log(new Error("Can't load people"))
);

// RETURNING PROMISES WITH FETCH

let getSpacePeople = () =>
  fetch("http://api.open-notify.org/astros.json").then((res) => res.json());

getSpacePeople().then(console.log); // {message: "success", number: 10, people: Array(10)}

let spaceNames = () =>
  getSpacePeople()
    .then((json) => json.people)
    .then((people) => people.map((p) => p.name))
    .then((names) => names.join(", "));

spaceNames().then(console.log); // Sergey Ryzhikov, Kate Rubins, Sergey Kud-Sverchkov, Mike Hopkins, Victor Glover, Shannon Walker, Soichi Noguchi, Mark Vande Hei, Oleg Novitskiy, Pyotr Dubrov

// USING ASYNC/AWAIT SYNTAX

const countToFive = async () => {
  console.log("zero seconds");
  await delay(1);
  console.log("one second");
  await delay(2);
  console.log("two seconds");
  await delay(3);
  console.log("three seconds");
};

countToFive();

// INCORPORATING FETCH WITH ASYNC/AWAIT

const githubRequest = async (login) => {
  let response = await fetch(`https://api.github.com/users/${login}`);
  let json = await response.json();
  let summary = `${json.name}, ${json.avatar_url}`;
  console.log(summary);
};

githubRequest("Nare-Stepanyan"); // Nare , https://avatars.githubusercontent.com/u/45096006?v=4

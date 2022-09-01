const db = require("./../db/users.json");
const users = db.users;

// Question 1: Return an array of Slytherin users
const slytherinUsers = users.filter((user) => user.house === "Slytherin");
console.log(slytherinUsers);

// Questions 2: Return an array of names (ie strings)
//  of Gryffindor users
const namesOfGryffindorUsers = users
  .filter((user) => user.house === "Gryffindor")
  .map((user) => user.name);
console.log(namesOfGryffindorUsers);

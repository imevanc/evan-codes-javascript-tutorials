const db = require("./../db/users.json");
const users = db.users;

// Question 1: Return an array of Slytherin users
const slytherinUsers = users.filter((user) => user.house === "Slytherin");
console.log(slytherinUsers);

// Questions 2: Return an array of names (ie strings)
//  of Slytherin users
const namesOfSlytherinUsers = users
  .filter((user) => user.house === "Slytherin")
  .map((user) => user.name);
console.log(namesOfSlytherinUsers);

const db = require("./../db/users.json");
const users = db.users;

// Question 1: Return an array of names
const names = users.map((user) => user.name);
console.log(names);

// Questions 2: Return an array of objects.
// Each object needs to have a name and a house property.
const newUsers = users.map((user) => {
  return { name: user.name, house: user.house };
});
console.log(newUsers);

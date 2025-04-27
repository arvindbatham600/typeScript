// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const user = {
  firstName: "arvind",
  lastName: "batham",
  email: "email.com",
  age: 22,
};

const Legal = (user: User) => {
  if (user.age >= 18) return true;
  else return false;
};

console.log(Legal(user));

const greet = (name: string) => console.log(`Hello ${name}`);
// greet("john");

const sum = (a: number, b: number): number => a + b;
const value = sum(3, 4);
// console.log(value);

const isLegal = (age: number) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(isLegal(18));

// create a function that takes another function as a input and runs it after 1 second.

const doSomething = (fn: () => void) => {
  setTimeout(fn, 1000);
};

const check = () => {
  console.log("checking...");
};

doSomething(check);

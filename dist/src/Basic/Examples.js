"use strict";
const greet = (name) => console.log(`Hello ${name}`);
// greet("john");
const sum = (a, b) => a + b;
const value = sum(3, 4);
// console.log(value);
const isLegal = (age) => {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isLegal(18));
// create a function that takes another function as a input and runs it after 1 second.
const doSomething = (fn) => {
    setTimeout(fn, 1000);
};
const check = () => {
    console.log("checking...");
};
doSomething(check);

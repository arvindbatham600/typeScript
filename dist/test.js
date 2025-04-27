"use strict";
// create a function that takes another function as a input and runs it after 1 second.
const doSomething = (fn) => {
    setTimeout(fn, 2000);
};
const check = () => {
    console.log("checking...");
};
doSomething(check);

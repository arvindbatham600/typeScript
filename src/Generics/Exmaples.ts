const ReturnFirstElement = (arr: (string | number)[]) => {
  return arr[0];
};

// Problem in this approach is user can send the different type of inputs
// console.log(ReturnFirstElement([1, 2, "3"]));

// typescript isn't able to infer the right type of the return type
const firstEl = ReturnFirstElement(["arvind", "batham"]);
// console.log(firstEl.toUpperCase());

// Solution - use Generic

const ReturnFirstElement1 = <T>(arr: T[]): T => {
  return arr[0];
};

const firstEl1 = ReturnFirstElement1(["arvind", "batham"]);
console.log(firstEl1.toUpperCase());

// Explanation - whatever type of array you will pass - it will create a that type of dataType

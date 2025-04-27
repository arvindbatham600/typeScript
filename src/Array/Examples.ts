// Given an array of positive integers as input, return the maximum value in the array

const maxNumber = (arr: number[]) => {
  let max = 0;
  arr.map((item) => {
    if (item > max) {
      max = item;
    }
  });
  return max;
};

const maxValue = maxNumber([1, 2, 3, 5, 6, 2]);
console.log("max value is ", maxValue);

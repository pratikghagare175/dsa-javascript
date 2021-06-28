//Implement a function countUniqueValues, which accepts a sorted array
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

const countUniqueValues = (arr) => {
  let count = 0;
  let left = 0;
  if (arr.length === 0) return left;

  for (let j = 1; j < arr.length; j++) {
    if (arr[left] !== arr[j]) {
      left++;
      arr[left] = arr[j];
    }
  }
  console.log(arr);
  return left + 1;
};

// const sortedArr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
// const sortedArr = [-2, -1, -1, 0, 1]; // 4
const sortedArr = [];
console.log(countUniqueValues(sortedArr));

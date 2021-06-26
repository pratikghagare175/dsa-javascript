// SUM ZERO - RETURN THE FIRST PAIR OF NUMBERS WHOSE SUM IS ZERO
const sumZero = (arr) => {
  //? There are two pointers in this problem statement: left and right
  let left = 0; // left pointer starting from the beginning of the array
  let right = arr.length - 1; // right pointer starting from the ending of the array
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]]; // if sum is zero return that pair and exit the loop
    } else if (sum > 0) {
      right--; // if the sum is greater than zero i.e on the positive side, then decrease the right pointer by 1
    } else {
      left++; // if the sum is less than zero i.e on the negative side, then increase the left pointer by 1
    }
  }
};

const checkArr = [-4, -3, -2, -1, 0, 1, 2, 3, 10]; //sorted array
console.log(sumZero(checkArr));

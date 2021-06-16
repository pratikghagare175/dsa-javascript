// There are Two Arrays, The elements of the second array are squared to that of the
// elements of the first array, Find if all the squares of the element of the first array
// is present in the second array and return true or else return false.
// Note:- The order is not important

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log("== FREQ 1 ==", frequencyCounter1);

  console.log("== FREQ 2 ==", frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2) in frequencyCounter2) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

const a = [1, 2, 3, 4];
const b = [9, 16, 1, 25];
console.log(same(a, b));

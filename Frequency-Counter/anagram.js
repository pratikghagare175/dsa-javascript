// An Anagram is word, phrase or name formed by rearranging the letters of another
// such as cinema, formed as iceman

// ******************* MY SOLUTION **************************** //
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const frequency1 = {};
  const frequency2 = {};

  for (let val of str1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }

  for (let val of str2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }
  console.log(frequency1);
  console.log(frequency2);

  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }

  return true;
};

console.log(validAnagram("qwertyah", "qeywrtb "));

// ********************** OPTIMIZED SOLUTION ****************** //

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (const val of str1) {
    lookup[val] ? (lookup[val] += 1) : (lookup[val] = 1);
  }

  for (const val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("qwerty", "ytrewh"));

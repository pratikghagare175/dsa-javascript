console.time("Time");

// ------ Using For Loop ------- //
// const addUpTo = (n) => {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };

// ---- Using a Formula ------ //
const addUpTo = (n) => {
  return (n * (n + 1)) / 2;
};

addUpTo(1000000000);
console.timeEnd("Time");
// console.log(`Time Elapsed: ${(t2 - t2) / 1000} seconds`);

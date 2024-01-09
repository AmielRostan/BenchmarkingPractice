const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here

  let arr = [];
  console.time("addNums10T");

  for(let i = increment; i <= 10 * increment; i += increment) {
    arr.push(addNums(i));
    console.timeLog("addNums10T");
  }

  console.timeEnd("addNums10T");
  return arr;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here

  let arr = [];
  console.time("addManyNums10T");

  for(let i = increment; i <= 10 * increment; i += increment) {
    arr.push(addManyNums(i));
    console.timeLog("addManyNums10T");
  }

  console.timeEnd("addManyNums10T");
  return arr;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

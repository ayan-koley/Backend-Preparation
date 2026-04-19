// array share refrences means shallow copy

const array = [0, 1, 2, 3, 4];
const newArray = new Array(0, 1, 2, 3, 4, 5);

// console.log(array);
// console.log(newArray)

array.push(5);
// console.log(array);
array.unshift(9);
// console.log(array);
array.shift();
// console.log(array);
array.pop();
// console.log(array);

const joinArray = newArray.join();
// console.log(joinArray);


//  slice & splice
// console.log("A ", array);
const myn1 = array.slice(1, 3);
// console.log(myn1);
// console.log("B ", array);
const myn2 = array.splice(1, 3);
// console.log(myn2);
// console.log("c ", array);



/// 
const username1 = ["ayan", "arpita"];
const username2 = ["sayan", "anik"];
// username1.push(username2);
const newConcatArray = username1.concat(username2)
// alternative of concat is spread operator
const spreadArray = [...username1, ...username2];

// console.log(newConcatArray);
// console.log(spreadArray);

const mdArray = [1, 2, 3, [4, 5, 6], [7, [8, 9, [10, 11]]]];
const non_mdArray = mdArray.flat(3);
// console.log(non_mdArray)

// console.log(Array.isArray("Ayan"));
// console.log(Array.from("Ayan"));
let something = Array.from({0: "ayan", 1: "koley", length: 2}, (v, k) => v);     
// console.log(something)
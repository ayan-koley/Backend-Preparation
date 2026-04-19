
if(true) {
    let a = 4;
    const b = 5;
    var c = 6;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "ayan";
    function two() {
        console.log(username);
        const website = "www.ayan.com";
    }
    console.log(website);
    two();
}
// one();

// +++++++++++++++++++++++++++++++++
/*
    understand letter how functions are store and accessed in memory.
*/

// console.log(addOne(5));
function addOne(num) {
    return num + 1;
}

// console.log(addTwo(6));
const addTwo = function(num) {
    return num + 2;
}
// TODO: How normal function is accessed before its declaration but function expression is not accessed before its declaration.
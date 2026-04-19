function addTwoNumbers(num1, num2) { // --> num1 and num2 are parameters
    console.log(num1 + num2);
}
// addTwoNumbers(3, 4); // --> 3 and 4 are arguments

function greetUser(username) {
    if(!username) {
        return;
    }
    return `${username}, welcome to JavaScript!`;
}

// console.log(greetUser(""));

function calculateShoppingCart(...items) {
    return items;
}

// console.log(calculateShoppingCart(30, 23, 543));

function handleObject(obj) {
    return obj;
}

// console.log(handleObject({ name: "Ayan", age: 16 }));
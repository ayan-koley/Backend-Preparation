// this keywork is refer to the current context

const user = {
    username: "ayan",
    price: 100,
    welcomeMessage: function() {
        console.log(this);
        console.log(`Welcome ${this.username} to our website`);
    },    
    welcomeMessageArrow: () => {
        console.log(this);
        console.log(`Welcome ${this.username} to our website`);
    }
}

// user.welcomeMessage();
// user.welcomeMessageArrow();

const sum = (a, b) => {
    return a + b;
}

// implicit return
const sum2 = (a, b) => a + b;
const sum3 = (a, b) => (a + b);

// console.log(sum(2, 3));
// console.log(sum2(2, 3));
// console.log(sum3(2, 3));


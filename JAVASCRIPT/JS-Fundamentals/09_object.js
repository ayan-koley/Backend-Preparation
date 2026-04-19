// singleton
// Object.create()

// Object literals
const mySym = Symbol("key1");
const JsUser = {
    name: "ayan koley",
    email: "ayan@google.com",
    "full name": "Ayan Koley",
    [mySym]: "Mykey1"
}
// console.log(JsUser.name);
// console.log(JsUser["name"]); // square notation
// console.log(JsUser["full name"]); // can't get the data by dot operator
// JsUser.age = 16;
// Object.freeze(JsUser);
// JsUser.age = 34;
// console.log(JsUser)

JsUser.greeting = function() {
    console.log(`Hello from Js user ${this["full name"]}`);
}

// JsUser.greeting();


const singleTonObj = new Object();
singleTonObj.name = "Singleton Object";

const obj1 = { 1: 'ayan', 2: 'arpita' };
const obj2 = { 3: 'sayan', 4: 'anik'};

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const spreadObj = { ...obj1, ...obj2 };
// console.log(spreadObj);

const courseObj = {
    name: "JavaScript",
    price: 999,
    instructor: "Ayan Koley",
}
const { name: courseName, price, instructor } = courseObj;
console.log(courseName);
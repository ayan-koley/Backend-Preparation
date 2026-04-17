// stack ( primitive types )  heap ( non-primitive types )


let username = "ayan-koley";
let copyUsername = username;
copyUsername = "ayankoley";

console.log(username);
console.log(copyUsername);

// ------------------------------------------------------------------

let user = {
  name: "ayan-koley",
  age: 25,
};
let copyUser = user;
copyUser.name = "ayankoley";

console.log(user);
console.log(copyUser);
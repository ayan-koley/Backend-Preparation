const getName = "ayan-koley";

console.log(`My name is ${getName}`); // string interpolation

const getName2 = new String("ayan koley"); // string object

// at() -> return the character at the specified index, supports negative indexing
console.log(getName.at(10));

// charAt() -> return the character at the specified index
console.log(getName.charAt(0));

// charCodeAt() -> return character code of the character at the specified index
console.log(getName.charCodeAt(0));

// codePointAt() -> return the Unicode code point of the character at the specified index
console.log(getName.codePointAt(0));

// concat() -> concatenate two or more strings and return a new string
console.log(getName.concat(" is a good boy").concat(" He is a good student."));

// endsWith() -> check if the string ends with the specified substring
console.log(getName.endsWith("koley"));
console.log(getName.endsWith("koley", 10)); // slice from 0 to 10 and check if it ends with "koley"

// includes() -> check if the string contains the specified substring
console.log(getName.includes("koley"));
console.log(getName.includes("koley", 10)); // slice from 10 to end and check if it includes "koley"

// indexOf() -> return the index of the first occurrence of the specified substring, returns -1 if not found
console.log(getName.indexOf("k"));
console.log(getName.indexOf("K", 2));

// lastIndexOf() -> return the index of the last occurrence of the specified substring, returns -1 if not found
console.log(getName.lastIndexOf("k"));

// localeCompare()
console.log(getName.localeCompare("ayan-koley"));

// match() -> return an array of matches for a string against a regular expression, returns null if no match is found
console.log(getName.match(/koley/));

// matchAll() -> return an iterator of all matches for a string against a regular expression, returns null if no match is found
console.log(getName.matchAll(/koley/g));

// padEnd() -> pad the current string with another string (multiple times, if needed) until the resulting string reaches the given length, returns a new string
console.log(getName.padEnd(20, "*"));

// padStart() -> pad the current string with another string (multiple times, if needed) until the resulting string reaches the given length, returns a new string
console.log(getName.padStart(20, "*"));

// repeat() -> return a new string which contains the specified number of copies of the string on which it was called, concatenated together
console.log(getName.repeat(3));

// replace()
console.log(getName.replace("koley", "koley is a good boy"));

// replaceAll()
console.log(getName.replaceAll("koley", "koley is a good boy"));

// search()
console.log(getName.search(/koley/));

// slice()
console.log(getName.slice(0, 4));

// split()
console.log(getName.split("-"));

// TODO: Write an article about string methods
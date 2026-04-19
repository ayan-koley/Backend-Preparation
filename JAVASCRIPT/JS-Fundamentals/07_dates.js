const d = new Date();

// console.log(d);
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toISOString())
// console.log(d.toJSON())
// console.log(d.toLocaleDateString())
// console.log(d.toLocaleString())
// console.log(d.toLocaleTimeString());

// ------------------ create your own date 

// const createdDate = new Date(2026, 3, 19);
const createdDate = new Date("04-19-2026")
// console.log(createdDate.toLocaleString());

console.log(new Date().toLocaleString('default', {
    weekday: "short",
    hour: "numeric",
}))
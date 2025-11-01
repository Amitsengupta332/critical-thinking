// const obj = {
//     nextLevel : {courseId : "level02"},
//     "Programming-hero": {courseId: "level01"},
// }
// console.log(obj);

// const obj ={};

// obj.nextLevel = {courseId : "level02"};
// obj[true] = {courseId: "level01"};
// console.log(obj);

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

const map = new Map();

// map.set(false,"Programming Hero");
map.set(course1, {courseId: "level01"});
map.set(course2, {courseId: "level02"});

console.log(map);
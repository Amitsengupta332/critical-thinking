//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});

console.log(lookupTable);

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }


// const post = postsArray.find((post) => post.id === "p-101");

const post = lookupTable["p-101"];

// for( let post in lookupTable){
//     console.log(post)
// }

for (let key in lookupTable) {
  console.log(lookupTable[key]); // logs each post object
}
console.log(post);
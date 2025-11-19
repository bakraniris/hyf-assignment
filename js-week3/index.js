// Javascript warmup - Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const nameToRemoveIndex = names.indexOf(nameToRemove);
if (nameToRemoveIndex !== -1) {
  names.splice(nameToRemoveIndex, 1);
}

console.log(names);
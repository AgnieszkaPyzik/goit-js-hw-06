const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listWithId = document.querySelector("#ingredients");
const list = document.createElement("li");
list.classList.add("item");

const vegetables = ingredients.map((ingredient) => `${ingredient}`).join(", ");

console.log(vegetables);

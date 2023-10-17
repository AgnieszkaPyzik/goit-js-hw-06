const item = document.querySelectorAll(".item");

console.log(`Number of categories: ${item.length}`);

item.forEach((element) => {
  console.log(
    `Category: ${element.querySelector("h2").textContent}
    Elements: ${element.querySelector("ul").children.length}`
  );
});

// const categories = document.querySelector("#categories").children;
// console.log("Number of categories: " + categories.length);

// for (const category of categories) {
//   console.log(`Category: ${category.firstElementChild.innerHTML}`);
//   console.log(`Elemeny: ${category.lastElementChild.children.length}`);
// }

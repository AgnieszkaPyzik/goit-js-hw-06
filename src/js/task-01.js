console.log(document);

const body = document.body;
console.log(body);

// const categories = document.querySelector(".categories");
// console.log(categories);

const item = document.querySelectorAll(".item");
// console.log(item);
console.log(`Number of categories: ${item.length}`);

item.forEach((element) => {
  console.log(
    `Category: ${element.querySelector("h2").textContent} 
    Elements: ${element.querySelector("ul").children.length}`
  );
});

// item.forEach((h2, li) => {
//   console.log(`Category: ${h2.textContent} Elements: ${li}`);
// });
// item.forEach((list) => {
//   console.log(`Elements: ${list.querySelector("ul").children.length}`);
// });

// const itemByList = item.querySelectorAll("li");
// console.log(itemByList);

// itemsByTagName.forEach(tagName => {
//   console.log(`Category: ${(tagName.innerHTML)}`);
// })

// itemsByTagName.forEach((h2) => {
//   console.log(`Category: ${h2.itemsByTagName}`);
// });

// const h2 = document.h2;
// console.log(h2);

// const prevoius = item.previousElementSibling;
// const next = item.nextElementSibling;

// const first = document.querySelectorAll("item.heading");
// console.log(first);

// const last = item.lastElelementChild;
// console.log(last);

// const children = item.children;
// console.log(children);
// console.log(`Category: ${firsItem} Elements: ${item.length}`);

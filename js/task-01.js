const item = document.querySelectorAll(".item");

console.log(`Number of categories: ${item.length}`);

item.forEach((element) => {
  console.log(
    `Category: ${element.querySelector("h2").textContent}
    Elements: ${element.querySelector("ul").children.length}`
  );
});


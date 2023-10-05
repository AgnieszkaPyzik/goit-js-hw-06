let counterValue = 0;
// const button = document.querySelector("button");
const button = document.querySelector('button[data-action="increment"]');
const button2 = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");
value.innerHTML = counterValue;

button.addEventListener("click", () => {
  value.innerHTML = ++counterValue;
});

button2.addEventListener("click", () => {
  value.innerHTML = --counterValue;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", () => {
  let color = getRandomHexColor(); //losowy kolor w formacie HEX z funkcji
  document.body.style.backgroundColor = color; // zmiana koloru tła elementu <body>
  spanColor.textContent = color; // wyświetlenie wartości koloru w elemencie <span> o klasie "color"
});

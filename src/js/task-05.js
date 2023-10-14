let input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("change", setOutput);

function setOutput(event) {
  event.preventDefault();
  const insertValue = event.currentTarget.value;
  output.textContent = insertValue;
  if (input.value == "" || input.value == " ") {
    output.innerHTML = "Anonymous";
  }
}

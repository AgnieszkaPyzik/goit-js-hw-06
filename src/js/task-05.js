const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("change", setOutput);

function setOutput(event) {
  const insertValue = event.currentTarget.value;
  //   const insertText = event.currentTarget.text;
  //   input.textContent = insertText;
  output.textContent = insertValue;
}

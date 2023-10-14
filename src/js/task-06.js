// #validation-input {
//     border: 3px solid #bdbdbd;
//   }

//   #validation-input.valid {
//     border-color: #4caf50;
//   }

//   #validation-input.invalid {
//     border-color: #f44336;
//   }

const input = document.querySelector("#validation-input");
const text = input.querySelector('[type="text"]');
const dataLength = input.querySelector('[data-length="6"]');

input.addEventListener("blur", () => {
  if (input.value.length === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

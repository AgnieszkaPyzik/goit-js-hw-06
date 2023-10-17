const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  form.reset();
}

// function handleSubmit(e) {
//   e.preventDefault();
//   if (loginForm.email.value.length === 0) {
//     alert("Pole E-mail nie może być puste!");
//   } else if (loginForm.password.value.length === 0) {
//     alert("Pole Hasło nie może być puste!");
//   }
// }

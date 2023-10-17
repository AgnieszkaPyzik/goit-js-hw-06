const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("Uzupełnij wszytskie pola!");
  }
  const response = { Login: email.value, Password: password.value };
  form.reset();
  return console.log(response);
}

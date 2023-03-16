const submit = document.getElementById("btn-login");

submit.addEventListener("click", validationInputs);

function validationInputs(e) {
  e.preventDefault();
  // get value from inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("msgError");
  let success = 1;
  let valid = true;

  if (email == "") {
    error.classList.add("show-msgError");
    error.classList.remove("hide-msgError");
    error.innerHTML = "Please type your E-mail";
    document.getElementById("email").focus();
    success = 0;
  }
  if (password === "") {
    error.classList.add("show-msgError");
    error.classList.remove("hide-msgError");
    error.innerHTML = "Please type your Password";
    document.getElementById("password").focus();
    success = 0;
  }

  if (success === 1) {
    window.open("home.html");
  } else {
    return valid;
  }
}

// const submit = document.getElementById("btn-login");
// console.log("variable submit equals => " + submit);

// submit.addEventListener("click", validate);

// function validate(e) {
//   e.preventDefault();

//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   let valid = true;

//   if (!email.value) {
//     const error = document.getElementById("msgError");
//     error.classList.add("show-msgError");
//     error.classList.remove("hide-msgError");
//     error.innerHTML = "Please type your E-mail";
//     document.getElementById("email").focus();
//   }
//   if (!password.value) {
//     const error = document.getElementById("msgError");
//     error.classList.add("show-msgError");
//     error.classList.remove("hide-msgError");
//     error.innerHTML = "Please type your Password";
//     document.getElementById("password").focus();
//     console.log("variable password equals => " + password);
//   }
//   return valid;
// }

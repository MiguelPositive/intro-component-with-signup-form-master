const form = document.querySelector("form");
const nameError = document.getElementById("name-error");
const lastNameError = document.getElementById("lastName-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const nameMessage = document.getElementById("name-message");
const lastNameMessage = document.getElementById("lastName-message");
const emailMessage = document.getElementById("email-message");
const passwordMessage = document.getElementById("password-message");

let nameValue = "";
let lastNameValue = "";
let emailValue = "";
let passwordValue = "";

const handleChange = (e) => {
  if (e.target.matches("#name")) {
    nameValue = e.target.value;
  } else if (e.target.matches("#lastName")) {
    lastNameValue = e.target.value;
  } else if (e.target.matches("#email")) {
    emailValue = e.target.value;
  } else if (e.target.matches("#password")) {
    passwordValue = e.target.value;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (
    nameValue == "" &&
    lastNameValue == "" &&
    emailValue == "" &&
    passwordValue == ""
  ) {
    nameError.style.display = "initial";
    nameMessage.style.display = "block";

    lastNameError.style.display = "initial";
    lastNameMessage.style.display = "block";

    emailError.style.display = "initial";
    emailMessage.style.display = "block";

    passwordError.style.display = "initial";
    passwordMessage.style.display = "block";
  } else if (nameValue == "") {
    nameError.style.display = "initial";
    nameMessage.style.display = "block";

    lastNameError.style.display = "none";
    lastNameMessage.style.display = "none";

    emailError.style.display = "none";
    emailMessage.style.display = "none";

    passwordError.style.display = "none";
    passwordMessage.style.display = "none";
  } else if (lastNameValue == "") {
    lastNameError.style.display = "initial";
    lastNameMessage.style.display = "block";

    nameError.style.display = "none";
    nameMessage.style.display = "none";

    emailError.style.display = "none";
    emailMessage.style.display = "none";

    passwordError.style.display = "none";
    passwordMessage.style.display = "none";
  } else if (emailValue == "") {
    emailError.style.display = "initial";
    emailMessage.style.display = "block";

    lastNameError.style.display = "none";
    lastNameMessage.style.display = "none";

    nameError.style.display = "none";
    nameMessage.style.display = "none";

    passwordError.style.display = "none";
    passwordMessage.style.display = "none";
  } else if (passwordValue == "") {
    passwordError.style.display = "initial";
    passwordMessage.style.display = "block";

    lastNameError.style.display = "none";
    lastNameMessage.style.display = "none";

    emailError.style.display = "none";
    emailMessage.style.display = "none";

    nameError.style.display = "none";
    nameMessage.style.display = "none";
  } else {
    alert("¡success!");
  }
};

document.addEventListener("change", handleChange);
form.addEventListener("submit", handleSubmit);

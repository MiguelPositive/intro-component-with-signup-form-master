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

const handleChangeForm = (e) => {
  switch (true) {
    case e.target.matches("#name"):
      nameValue = e.target.value;
      break;
    case e.target.matches("#lastName"):
      lastNameValue = e.target.value;
      break;
    case e.target.matches("#email"):
      emailValue = e.target.value;
      break;
    case e.target.matches("#password"):
      passwordValue = e.target.value;
      break;
    default:
      break;
  }
};

const showErrorMessage = (
  nameValidation,
  lastnameValidation,
  emailValidation,
  passwordValidation
) => {
  nameError.style.display = `${nameValidation ? "initial" : "none"}`;
  nameMessage.style.display = `${nameValidation ? "block" : "none"}`;

  lastNameError.style.display = `${lastnameValidation ? "initial" : "none"}`;
  lastNameMessage.style.display = `${lastnameValidation ? "block" : "none"}`;

  emailError.style.display = `${emailValidation ? "initial" : "none"}`;
  emailMessage.style.display = `${emailValidation ? "block" : "none"}`;

  passwordError.style.display = `${passwordValidation ? "initial" : "none"}`;
  passwordMessage.style.display = `${passwordValidation ? "block" : "none"}`;
};

const handleSubmit = (e) => {
  e.preventDefault();
  switch (true) {
    case nameValue == "" &&
      lastNameValue == "" &&
      emailValue == "" &&
      passwordValue == "":
      showErrorMessage(true, true, true, true);
      break;
    case nameValue == "":
      showErrorMessage(true, false, false, false);
      break;
    case lastNameValue == "":
      showErrorMessage(false, true, false, false);
      break;
    case emailValue == "":
      showErrorMessage(false, false, true, false);
      break;
    case passwordValue == "":
      showErrorMessage(false, false, false, true);
      break;
    default:
      alert("¡success!");
      break;
  }
};

document.addEventListener("change", handleChangeForm);
form.addEventListener("submit", handleSubmit);

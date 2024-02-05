const themeButton = document.getElementById("theme");
function onClick() {
  document.body.classList.toggle("dark");
}

themeButton.addEventListener("click", onClick);

let errorContainer = document.querySelector(".message-error");
let errorlist = document.querySelector(".message-error ul");
errorlist.innerHTML = "";

errorContainer.classList.remove("visible");

let email = document.querySelector("#email");

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    email.value == "" ||
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)
  ) {
    errorContainer.classList.add("visible");
    email.classList.remove("success");
    email.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "le champ 'Email' ne peut pas être vide";

    errorlist.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let nom = document.querySelector("#nom");
  if (nom.value == "") {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");
    nom.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ 'Nom' doit contenir au moins 6 caractères.";

    errorlist.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  let prenom = document.querySelector("#prenom");
  if (prenom.value == "") {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");
    prenom.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Le champ 'Prenom' doit contenir au moins 6 caractères.";

    errorlist.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  let password = document.querySelector("#password");
  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (password.value.length > 10 || passCheck.test(password.value) == false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");
    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit faire 1à caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";
    errorlist.appendChild(err);
  } else {
    password.classList.add("success");
  }

  let passwordInitial = document.querySelector("#password");
  let passwordRepeat = document.querySelector("#password2");

  if (passwordInitial.value != passwordRepeat.value) {
    errorContainer.classList.add("visible");
    passwordRepeat.classList.remove("success");
    passwordRepeat.classList.add("error");

    let err = document.createElement("li");
    err.innerText = "Les mots de passes sont différents";
    errorlist.appendChild(err);
  } else if (passwordRepeat.value !== "") {
    passwordRepeat.classList.add("success");
  }

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    pseudo.classList.contains("success") &&
    email.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordRepeat.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});

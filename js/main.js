//Variabbles

let upButton = document.getElementById("uploaded-button");
let bacButton = document.getElementById("back-button");
let numb = document.getElementById("js-user-number");
let massage = document.getElementById("massage-js");

//Events

upButton.addEventListener("click", congrat);

//Function

function congrat() {
  numb.classList.add("none-style");
  upButton.classList.add("none-style");
  bacButton.classList.remove("none-style");
  massage.classList.remove("none-style");

  if (numb.value == 5) {
    massage.innerHTML = "Ügyes vagy Gratulálok!";
  }

  if (numb.value == 4) {
    massage.innerHTML = "Egész jó!";
  }

  if (numb.value == 3) {
    massage.innerHTML = "Tudsz te ennél jobbat is!";
  }

  if (numb.value == 2) {
    massage.innerHTML = "Ez épp hogy megvan!";
  }
  if (numb.value == 1) {
    massage.innerHTML = "Legközelebb sikerül!!";
  }
}

bacButton.onclick = function () {
  location.reload();
};

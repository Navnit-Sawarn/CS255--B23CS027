function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

const body = document.querySelector("body");
let n = 0;
let result = 0;

const changebgBody = function () {
  body.style.backgroundImage = `url(img/img-${n}.jpg)`;
  n = (n + 1) % 5;
};

changebgBody();
setInterval(changebgBody, 2000);

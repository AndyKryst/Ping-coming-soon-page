var button = document.querySelector("button");
var input = document.querySelector("input");
var message = document.querySelector(".message");
var last = document.documentElement.clientWidth

function inputLength() {
  return input.value.length;
}

function screenWidth() {
  return document.documentElement.clientWidth
}

function reload() {
  if (screenWidth() !== last) {
    location.reload();
  }
}

function reject() {
  reload();
  input.classList.add("red");
  message.classList.remove("hidden");
  if (screenWidth() < 960) {
    button.classList.add("move");
  } else if (screenWidth() > 960) {
    message.classList.add("moveMsg")
  }
  input.value = "";
  last = screenWidth();
}

function approve() {
  reload();
  input.classList.remove("red");
  message.classList.add("hidden");
  if (screenWidth() <= 960) {
    button.classList.remove("move");
  } else if (screenWidth() > 960) {
    message.classList.remove("moveMsg")
  }
  input.value = "";
  var last = screenWidth();
  alert("Thanks! We'll let you know when we're up and running!");
}

function checkClick() {
  if (inputLength() === 0) {
    reject();
  } else if (inputLength() > 0) {
    check_Email();
  }
}

function checkPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    check_Email();
  }
}

function check_Email() {
  var mailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(mailTest.test(input.value)) {
    approve();
  }
  else {
    reject();
  }
}

button.addEventListener("click", checkClick);
input.addEventListener("keypress", checkPress);
window.addEventListener("resize", screenWidth);

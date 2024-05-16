const background = document.getElementById("body");
const button = document.querySelector("button");

function openColor(color) {
  if (color == "red") {
    red();
  } else if (color == "blue") {
    blue();
  }
}

function red() {
  background.classList.add("red_body");
  button.classList.add("button_red");
  console.log("Script loaded");
}

function blue() {
  background.classList.add("blue_body");
  button.classList.add("button_blue");
}
//df

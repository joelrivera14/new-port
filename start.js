const background = document.getElementById("body");
const redButton = document.getElementById("red");

function open(color) {
  if (color == "red") {
    red();
  }
}

function red() {
  background.classList.add("red_body");
  redButton.classList.add("button_red");
}

let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = "Ans: " + eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
    console.log("Screen value is: " + screen.value);
    console.log("Screen val is: " + screenValue);
  });
}

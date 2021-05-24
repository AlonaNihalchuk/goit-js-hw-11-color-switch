const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");

buttonStartRef.addEventListener("click", onButtonStartClick);
buttonStopRef.addEventListener("click", onButtonStopClick);

let intervalId = null;
function onButtonStartClick(e) {
  if (e.target.dataset.action === "start") {
    buttonStartRef.removeEventListener("click", onButtonStartClick);
    console.log("remove");
  }

  const changeColorOfBody = () => {
    let color = colors[randomIntegerFromInterval(0, colors.length - 1)];

    bodyRef.style.backgroundColor = color;
    console.log("hi");
  };
  intervalId = setInterval(changeColorOfBody, 1000);
}

function onButtonStopClick(e) {
  clearInterval(intervalId);
  if (e.target.dataset.action === "stop") {
    buttonStartRef.addEventListener("click", onButtonStartClick);
  }
}

let count = 0;
const counter = document.querySelector("#count");
const message = document.getElementById("status-message");
const increment = document.getElementById("increase-btn");
const decrement = document.getElementById("decrease-btn");
const reset = document.getElementById("reset-btn");
const bar = document.querySelector(".progress-bar");
//const body = document.querySelector("body");
//console.log(bar);

//console.log(increament);
//let counterP = Math.abs((counter * 100) / 10);
let MaxLimit = 10;
let MinLimit = -10;

///EventListeners

//mouse events
increment.addEventListener("click", () => {
  count++;
  Ui();
});
decrement.addEventListener("click", () => {
  count--;
  Ui();
});
reset.addEventListener("click", () => {
  count = 0;
  Ui();
});
///keypress events

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    // Only allow increment if we haven't hit the MaxLimit
    if (count < MaxLimit) {
      count++;
      Ui();
    }
  } else if (e.key === "ArrowDown") {
    // Only allow decrement if we haven't hit the MinLimit
    if (count > MinLimit) {
      count--;
      Ui();
    }
  } else if (e.key === " ") {
    // Spacebar to reset
    count = 0;
    Ui();
  }
});

//// _---Functions

function Ui() {
  ///1.Update logic.
  counter.textContent = count;
  counter.classList.remove("positive", "negative", "neutral");
  localStorage.setItem("currentCount", count);
  if (count > 0) {
    counter.classList.add("positive");
    bar.style.backgroundColor = "green";
    message.textContent = "Counter is now positive";
  } else if (count < 0) {
    counter.classList.add("negative");
    bar.style.backgroundColor = "red";
    message.textContent = "Counter is now negative";
  } else {
    counter.classList.add("neutral");
    message.textContent = "Counter is neutral";
  }
  //Progressbar
  counterP = Math.abs((count * 100) / 10);
  bar.style.width = `${counterP}%`;

  //limits
  if (count >= MaxLimit) {
    increment.disabled = true;
    message.textContent = "Maxmum limit reached.";
  } else if (count <= MinLimit) {
    decrement.disabled = true;
    message.textContent = "Minimum limit reached.";
  } else {
    increment.disabled = false;
    decrement.disabled = false;
  }
}
//localstorage
let savedCount = localStorage.getItem("currentCount");
//console.log(savedCount);
if (savedCount) {
  count = Number(savedCount);
}

Ui();

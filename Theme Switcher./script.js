const btns = document.querySelectorAll(".theme-btn");
const body = document.querySelector("body");
const randomThemes = ["dark", "light", "blue", "green"];

///eventListener

btns.forEach((btn) => {
  //console.log(btn);
  btn.addEventListener("click", (e) => {
    //console.log(e.target.dataset.theme);
    const selectedTheme = e.target.dataset.theme;
    selectedTheme === "random" ? random() : setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });
});

//Functions
function setTheme(theme) {
  body.className = "";
  body.classList.add(`${theme}-theme`);
}

function random() {
  const colorIndex = Math.floor(Math.random() * randomThemes.length);
  const color = randomThemes[colorIndex];
  // console.log(color);
  body.className = "";
  //body.classList.add(`dark-theme`);
  body.classList.add(`${color}-theme`);
}

// This runs immediately when the page loads/refreshes
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  savedTheme === "random" ? random() : setTheme(savedTheme);
}

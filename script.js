const toogleSwitch = document.querySelector(".input");
const nav = document.getElementById("nav");
const toggleicon = document.getElementById("toggle-icon");
const textbox = document.getElementById("text-box");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const imageSelector = function (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

function modeChanger(isDark) {
  nav.style.backgroundColor = isDark
    ? `rgb(255 255 255/50%)`
    : `rgb(0 0 0/50%)`;
  textbox.style.backgroundColor = isDark
    ? `rgb(0 0 0/50%)`
    : `rgb(255 255 255/50%)`;
  console.log(toggleicon.children);
  toggleicon.children[0].textContent = isDark ? `Dark Mode` : `Light Mode`;

  isDark
    ? toggleicon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleicon.children[1].classList.replace("fa-moon", "fa-sun");

  isDark ? imageSelector("dark") : imageSelector("light");
}

// function darkMode() {
//   nav.style.backgroundColor = `rgb(255 255 255/50%)`;
//   textbox.style.backgroundColor = `rgb(0 0 0/50%)`;
//   console.log(toggleicon.children);
//   toggleicon.children[0].textContent = `Dark Mode`;
//   // toggleicon.children[1].classList.remove("fa-sun");
//   // toggleicon.children[1].classList.add("fa-moon");
//   toggleicon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageSelector("dark");
// }
// function lightMode() {
//   nav.style.backgroundColor = `rgb(0 0 0/50%)`;
//   textbox.style.backgroundColor = `rgb(255 255 255/50%)`;
//   console.log(toggleicon.children);
//   toggleicon.children[0].textContent = `Light Mode`;

//   toggleicon.children[1].classList.replace("fa-moon", "fa-sun");
//   imageSelector("light");
// }

function switchTheme() {
  if (toogleSwitch.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    // darkMode();
    modeChanger(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    // lightMode();
    modeChanger(false);
  }
}

toogleSwitch.addEventListener("input", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toogleSwitch.checked = true;
    modeChanger(true);
  }
}

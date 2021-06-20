const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("side-drawer");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  drawer.classList.toggle("open");
});

const navs = document.querySelectorAll(".footer-navlist");
const title = document.querySelectorAll(".nav-title");

title.forEach((element) => {
  element.addEventListener("click", (event) => {
    let rank = event.target.getAttribute("rank");
    navs[rank].classList.toggle("open");
  });
});

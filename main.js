const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("side-drawer");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  drawer.classList.toggle("open");
});

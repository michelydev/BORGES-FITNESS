const menu = document.querySelector(".menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {

  const clicouNoMenu =
    nav.contains(e.target) ||
    menu.contains(e.target);

  if (!clicouNoMenu) {
    nav.classList.remove("active");
  }
});
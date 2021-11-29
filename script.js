var menuBtn = document.getElementById("menu-btn");
var myLinks = document.getElementById("mylinks");
var dotBtn = document.getElementById("dot-btn");

menuBtn.addEventListener("click", function () {
  myLinks.classList.add("show-menu");
  dotBtn.classList.add("show-menu");
  menuBtn.classList.add("hide-button");
});

dotBtn.addEventListener("click", function () {
  myLinks.classList.remove("show-menu");
  dotBtn.classList.remove("show-menu");
  menuBtn.classList.remove("hide-button");
});

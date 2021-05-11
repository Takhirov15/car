// Burger-menu
let burger = document.querySelector(".burger-menu");
let menu = document.querySelector(".header-menu");

burger.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);

function toggleMenu(){
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
}

// Search-modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
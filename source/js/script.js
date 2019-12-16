var menuButton = document.querySelector("#button-menu");
var menu = document.querySelectorAll(".main-nav__item--optional");

menuButton.classList.remove("main-nav__toggle--no-js");
menuButton.classList.add("main-nav__toggle--closed");
for(var i = 0; i < menu.length; i++){
  menu[i].classList.remove("main-nav__item--optional");
}

menuButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menuButton.classList.toggle("main-nav__toggle--closed");
  menuButton.classList.toggle("main-nav__toggle--opened");

  for(var i = 0; i < menu.length; i++){
    menu[i].classList.toggle("main-nav__item--optional");
  }
});
// 1

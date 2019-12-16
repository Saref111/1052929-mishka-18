var menuButton = document.querySelector("#button-menu");
var menu = document.querySelectorAll(".main-nav__item--optional");
var orderButton = document.querySelector("#order-button");
var popup = document.querySelector("#popup");
var inputSize = document.querySelector("#s-size");
var popupWindow = document.querySelector(".popup__wrapper");
var carts = document.querySelectorAll(".catalog-card__cart");

menuButton.classList.remove("main-nav__toggle--no-js");
menuButton.classList.add("main-nav__toggle--closed");
for (var i = 0; i < menu.length; i++) {
  menu[i].classList.remove("main-nav__item--optional");
}

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuButton.classList.toggle("main-nav__toggle--closed");
  menuButton.classList.toggle("main-nav__toggle--opened");

  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.toggle("main-nav__item--optional");
  }
});

if (orderButton) {
  orderButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup--showed");
    inputSize.focus();
  });
}

if (popup) {
  popup.addEventListener("click", function (e) {
    if (e.target != popupWindow && e.target === popup) {
      popup.classList.remove("popup--showed");
    }
  });

  popup.addEventListener("keydown", function (e) {
    if (e.target != popupWindow && e.target === popup) {
      popup.classList.remove("popup--showed");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup--showed")) {
        popup.classList.remove("popup--showed");
      }
    }
  });
}

if (carts[0]) {
  for (var i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("popup--showed");
    });
  }
}
// 1

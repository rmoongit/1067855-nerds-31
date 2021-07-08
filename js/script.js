// Variable
  var popup = document.querySelector(".modal-content");
  var logIn = document.querySelector(".popup-button")
  var open = document.querySelector(".map-button");
  var close = document.querySelector(".cross-close");
  var loginForm = document.querySelector(".login-form");
  var loginLogin = document.querySelector(".user-login");
  var loginEmail = document.querySelector(".user-adress");


//  Functions
  open.addEventListener("click", function (event) {
  event.preventDefault(event);
  popup.classList.add("modal-show");
  loginLogin.focus();
});

  close.addEventListener("click", function (event) {
  event.preventDefault(event);
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

  loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
}
});

  window.addEventListener("keydown", function (evt) {
  if  (evt.keyCode === 27) {
  if (popup.classList.contains("modal-show")) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
   popup.classList.remove("modal-error");
  }
}
});

const popup=document.querySelector(".modal-content"),logIn=document.querySelector(".popup-button"),open=document.querySelector(".map-button"),close=document.querySelector(".cross-close"),loginForm=document.querySelector(".login-form"),loginLogin=popup.querySelector(".user-login"),loginEmail=document.querySelector(".user-adress");open.addEventListener("click",function(o){o.preventDefault(o),popup.classList.add("modal-show"),loginLogin.focus()}),close.addEventListener("click",function(o){o.preventDefault(o),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),loginForm.addEventListener("submit",function(o){loginLogin.value&&loginEmail.value||(o.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(o){27===o.keyCode&&popup.classList.contains("modal-show")&&(o.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});
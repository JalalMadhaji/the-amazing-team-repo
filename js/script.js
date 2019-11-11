let burger = document.querySelector(".burger");
let topMenu = document.querySelector(".menu nav");

// handling nav show and burger icon animation by adding custom classes
burger.addEventListener("click", function() {
  console.log("clicked");
  topMenu.classList.toggle("shown-nav");
  burger.classList.toggle("clicked");
});

// close opening nav,uls and burger when resize the window
window.addEventListener("resize", function() {
  topMenu.classList.remove("shown-nav");
  burger.classList.remove("clicked");
});

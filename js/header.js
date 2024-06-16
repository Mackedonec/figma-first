const burgerBtn = document.querySelector(".burger-btn");
const burgerIcon = document.querySelector(".burger-icon");
const navList = document.querySelector(".header-nav__list");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-visible");
  burgerIcon.classList.toggle("icon-cross");
});

navList.addEventListener("click", () => {
  navList.classList.remove("nav-visible");
  burgerIcon.classList.toggle("icon-cross");
});

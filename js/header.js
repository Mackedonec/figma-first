const burgerBtn = document.querySelector(".burger-btn");
const navList = document.querySelector(".header-nav__list");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav-visible");
});

navList.addEventListener("click", () => {
  navList.classList.remove("nav-visible");
});

const burgerBtn = document.querySelector(".navbar__burger");
const menu = document.querySelector(".hero__activeMenu");
const closeBtn = document.querySelector(".hero__menuButton--close");

burgerBtn.addEventListener("click", () =>
  menu.classList.add("hero__activeMenu--active")
);
closeBtn.addEventListener("click", () =>
  menu.classList.remove("hero__activeMenu--active")
);

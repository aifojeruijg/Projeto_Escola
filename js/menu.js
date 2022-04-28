const menumobile = document.querySelector(".menu-mobile");
const navMenu = document.querySelector(".nav-menu");

menumobile.addEventListener("click", () => {
    menumobile.classList.toggle("active");
    navMenu.classList.toggle("active");
})

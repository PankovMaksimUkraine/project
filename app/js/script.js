const burger = document.querySelector(".mobile-menu")
const menu = document.querySelector(".menu__list")
burger.addEventListener("click", function() {
    menu.classList.toggle("menu__list--none")
    burger.classList.toggle("mobile-menu--close")
})
console.log(burger)
console.log(menu)
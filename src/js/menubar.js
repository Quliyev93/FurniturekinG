

const menuBtn = document.getElementById("menu_btn");
const menuContent = document.getElementById("menu_content");
const closeMenu = document.getElementById("close_menu");
const login = document.getElementById("login");

menuBtn.addEventListener("click", () => {
    menuContent.style.display = "block";
    login.style.display = "none"
});

closeMenu.addEventListener("click", () => {
    menuContent.style.display = "none"
    login.style.display = "inline"
})  
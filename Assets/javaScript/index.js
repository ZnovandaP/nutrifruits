// DOM for trigered Humburger Menu and add blur effect at main and footer
const humburgerMenu = document.querySelector(".humburgerMenu");
const menuList = document.querySelector(".list-item");
const blurMainContent = document.querySelector("main");
const blurFooterContent = document.querySelector("footer");

humburgerMenu.addEventListener("click", () => {
	menuList.classList.toggle("slider");
	blurMainContent.classList.toggle("blur");
	blurFooterContent.classList.toggle("blur");
});

const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const closeX = document.getElementById("closeX");

// Toggle Mobile Menu
const toggleMobileMenu = () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    burgerBtn.classList.toggle('active')
    closeX.classList.toggle('active')
}

const closeMobileMenu = () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    burgerBtn.classList.toggle('active')
    closeX.classList.toggle('active')
}

closeX.addEventListener('click', closeMobileMenu);
burgerBtn.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', closeMobileMenu);
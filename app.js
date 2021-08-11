const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

// Toggle Mobile Menu
const toggleMobileMenu = () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
}

const closeMobileMenu = () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
}



burgerBtn.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', closeMobileMenu);
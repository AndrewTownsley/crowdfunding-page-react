const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const openModal = document.getElementById("burgerBtn");
const clodeMobile = document.getElementById("closeX");

// Toggle Mobile Menu
const openMobileMenu = () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    openMobile.classList.toggle('inActive')
    closeMobile.classList.toggle('active')
}

const closeMobileMenu = () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    openMobile.classList.toggle('active')
    closeMobile.classList.toggle('inActive')
}

closeMobile.addEventListener('click', closeMobileMenu);
openMobile.addEventListener('click', openMobileMenu);
overlay.addEventListener('click', closeMobileMenu);
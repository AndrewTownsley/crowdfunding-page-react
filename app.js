const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");


// Toggle Mobile Menu
const toggleMobileMenu = () => {
    mobileNav.classList.toggle('active');
    overlay.classList.toggle('active');
    openMobile.classList.toggle('inActive');
    closeMobile.classList.toggle('active')
}

// Toggle Pledge Modal

const togglePledgeModal = () => {
    overlay.classList.toggle('active');
    pledgeModal.classList.toggle('active');
}
closePledgeModal.addEventListener('click', togglePledgeModal);
projectBtn.addEventListener('click', togglePledgeModal);
overlay.addEventListener('click', togglePledgeModal);
closeMobile.addEventListener('click', toggleMobileMenu);
openMobile.addEventListener('click', toggleMobileMenu);
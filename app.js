const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const about = document.getElementById("about");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const rewardBtn = document.querySelectorAll(".reward-btn");
console.log(rewardBtn);
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");
const pledgeSelects= document.querySelectorAll(".pledge-select");
const radioLabel = document.getElementsByClassName("radio-label");
const radioCircle = document.getElementById("radioCircle");
const pledgePopOut = document.getElementById("pledgePopOut");


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

const rewardModalToggle = (e) => {
    if(e.target !== e.currentTarget) {
        const currentRewardBtn = document.querySelector(".reward-btn")
        if(currentRewardBtn) {
            overlay.classList.toggle('active');
            pledgeModal.classList.toggle('active');
        }
    }
}


const selectPledge = (e) => {
    if(e.target !== e.currentTarget) {
        const currentPledge = document.querySelector('.pledge-select.active');
        if(currentPledge) {
            currentPledge.classList.remove('active');
        }
        const radio = e.target;
        radio.parentElement.parentElement.classList.toggle('active');
        pledgePopOut.classList.toggle('active');
    }
    e.stopPropagation;
}


pledgeModal.addEventListener('click', selectPledge, false); 
closePledgeModal.addEventListener('click', togglePledgeModal);
projectBtn.addEventListener('click', togglePledgeModal);
about.addEventListener('click', rewardModalToggle);
overlay.addEventListener('click', togglePledgeModal);
closeMobile.addEventListener('click', toggleMobileMenu);
openMobile.addEventListener('click', toggleMobileMenu);
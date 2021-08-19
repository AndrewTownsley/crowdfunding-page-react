const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");
const pledgeSelects= document.querySelectorAll(".pledge-select");
console.log(pledgeSelects);
const radioLabel = document.getElementsByClassName("radio-label");
const radioCircle = document.getElementById("radioCircle");


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

// Clear Pledge Selection
// const clearPledge = () => {
//     console.log("clearPledge Called");
//     const currentPledge = document.querySelector('.pledge-select.active');
//     if(currentPledge) {
//         currentPledge.classList.remove('active');
//     }
// }
// The goal of this funciton is to clear the active classes from the selected pledge-div, clear the pledge input back to zero. 


const selectPledge = (e) => {
    if(e.target != e.currentTarget) {
        const currentPledge = document.querySelector('.pledge-select.active');
        if(currentPledge) {
            currentPledge.classList.remove('active');
        }
        const radio = e.target;
        console.log(radio);
        console.log(radio.parentElement.parentElement);
        radio.parentElement.parentElement.classList.toggle('active');
    }
    e.stopPropagation;
    // Select the parent of the pledge select radio input
    // Toggle active class on this element
    // open pledge-pop-out
    // radio input checked === true;
}


pledgeModal.addEventListener('click', selectPledge, false); 
closePledgeModal.addEventListener('click', togglePledgeModal);
projectBtn.addEventListener('click', togglePledgeModal);
overlay.addEventListener('click', togglePledgeModal);
closeMobile.addEventListener('click', toggleMobileMenu);
openMobile.addEventListener('click', toggleMobileMenu);
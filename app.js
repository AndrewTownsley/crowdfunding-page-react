const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");
const pledgeSelects = document.querySelectorAll(".pledge-select input");
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
// The goal of this funciton is to clear the active classes from the selected pledge-div, clear the pledge input back to zero. 
const clearPledge = () => {
    const currentPledge = document.querySelector(".pledge-select.active");
    if(currentPledge) {
        // Declare radio variable
        const radio = document.querySelector('.pledge-select.active input')
        // Declare pledge-pop-out variable
        const pledge = document.querySelector('.pledge-select .pledge-pop-out');
        console.log(pledge);
        // Declare pledge-input-value variable
        const pledgeInput = document.querySelector('.pledge-select.active .pledge-pop-out input')
        // Remove active class from currentPledge
        currentPledge.classList.remove('.active');
        // Remove checked from radio input
        radio.checked = false;
        // Hide pledge pop-out
        pledge.style.maxHeight = 0;
        // setTimeout(() => {

        //     pledgeInput.parentElement.classList.remove('error');
        //     pledgeInput.value = "";
        // }, 500)
    }
}

const selectPledge = (select) => {
    // Select the parent of the pledge select radio input
    const pledgeParent = select.parentElement;
    // Toggle active class on this element
    pledgeParent.classList.toggle('active');
    // open pledge-pop-out
    const pledge = document.getElementsByClassName('.pledge-pop-out');
    // radio input checked === true;
    select.checked = true;
    setTimeout(() => pledgeParent.scrollIntoView({ behavior: "smooth"}), 500);
}

// Pledge Select -- radio button --
pledgeSelects.forEach(pledge => {
    pledge.addEventListener('change', 
    clearPledge(),
    selectPledge(pledge))
})




closePledgeModal.addEventListener('click', togglePledgeModal);
projectBtn.addEventListener('click', togglePledgeModal);
overlay.addEventListener('click', togglePledgeModal);
closeMobile.addEventListener('click', toggleMobileMenu);
openMobile.addEventListener('click', toggleMobileMenu);
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const about = document.getElementById("about");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const rewardBtn = document.querySelectorAll(".reward-btn");
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");
// const pledgeSelects= document.querySelectorAll(".pledge-select");
const radioCircle = document.getElementById("radioCircle");
const pledgeNoReward = document.getElementById('noReward');
const pledge25 = document.getElementById('25');
const pledge75 = document.getElementById('75');
const pledge200 = document.getElementById('200');


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

pledgeModal.addEventListener('click', (e) => {
    console.log(e.target.id);
    const pledgePopOut = document.querySelector('.pledge-select .pledge-pop-out');
    console.log(pledgePopOut);
    const pledgeSelect = document.querySelectorAll('.pledge-select .radio-label');
    const id = e.target.id;
    if(id === "noReward" || id === "25" || id === "75" || id === "200") {
        pledgeSelect.forEach((pledge) => {
            e.target.parentElement.parentElement.classList.toggle('active');
            e.target.parentElement.parentElement.classList.add('active');
            pledgePopOut.classList.add('active');
        })
    }
})

// radioBtn.forEach(pledge => {
//     pledge.addEventListener('click', selectPledge)
// })

// pledgeModal.addEventListener('click', selectPledge, false); 
closePledgeModal.addEventListener('click', togglePledgeModal);
projectBtn.addEventListener('click', togglePledgeModal);
about.addEventListener('click', rewardModalToggle);
overlay.addEventListener('click', togglePledgeModal);
closeMobile.addEventListener('click', toggleMobileMenu);
openMobile.addEventListener('click', toggleMobileMenu);




// const selectPledge = (e) => {
//     e.preventDefault();
//     const currentPledge = document.querySelector('.pledge-select');
//     const radioLabel = document.querySelector(".radio-label");
//     if(e.target !== e.currentTarget) {
//         console.log(e.target.parentElement.parentElement.parentElement);
//         if(currentPledge) {
//             currentPledge.classList.toggle('active');
//         }
//         // const radio = e.target;
//         radioLabel.parentElement.parentElement.parentElement.classList.toggle('active');
//         const pledgePopOut = document.querySelector('.pledge-select .pledge-pop-out');
//         pledgePopOut.classList.toggle('active');
//     }
//     e.stopPropagation;
// }

// const selectPledge = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.parentElement.parentElement.parentElement);
    //     const activePledge = document.querySelector('.pledge-select .active')
    //     const pledge = document.querySelector('.pledge-select')
    //     if(e.target.parentElement.parentElement === activePledge){
    //         console.log("active-removed");
    //         activePledge.classList.remove('active');
    //     } else if
    //     (e.target.parentElement.parentElement.parentElement === pledge) {
    //         console.log("else if");
    //         pledge.classList.toggle('active');
    // }
    // }











   // If e.target == radio btn {
        // pledgePopOut active
    //     const radioEl = document.querySelectorAll('.radio-label')
    // if (e.target == radioEl) {
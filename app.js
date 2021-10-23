const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const about = document.getElementById("about");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const rewardBtn = document.querySelectorAll(".reward-btn");
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");
const radioCircle = document.getElementById("radioCircle");
const pledgeNoReward = document.getElementById('noReward');
const pledge25 = document.getElementById('25');
const pledge75 = document.getElementById('75');
const pledge200 = document.getElementById('200');

//==============================================================================

const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
const goalContainer = document.querySelector('.goal-container');
const pledgeBtns = document.querySelectorAll('.btn-container .pledge-btn');
let newWidth = Number(localStorage.getItem('newWidthStored'))
const optionBtns = document.querySelectorAll('.button-options .option-btn');
progressFill.style.width = newWidth + "px"; 

let pledgeTotal = 0;
let backersCount = 345;
let pledgeCounter = parseInt(0);
let pledgeCountValue = Number(localStorage.getItem('pledgeValue'));
pledgeCount.innerText = `${pledgeCountValue} of`;


const updatePledgeTotal = (e) => {
    const activePledge = document.querySelector('.custom-pledge-form.active')
    if(e.target.nextSibling.nextSibling === activePledge){
            activePledge.classList.toggle('active');
        } else {
        
                e.target.nextSibling.nextSibling.classList.toggle('active');
                // customPledgeForm.classList.toggle('active');
                // ---------------------progress bar 
                const progressFill = document.getElementById('progress-fill');
                let pledgeValue = parseInt(e.target.dataset.value);
                progressFill.style.width = parseInt(pledgeTotal);
                let newWidth = pledgeTotal += pledgeValue;
                progressFill.style.width = newWidth + "px";   
                localStorage.setItem('newWidthStored', newWidth)
                //-------------pledge count & backer count -----------------------
                let backersCountDisplay = document.getElementById('backersCount');
                backersCount++;
                backersCountDisplay.innerText = backersCount; 
                const pledgeCount = document.getElementById('pledgeCount');
                let pledgeBtnValue =  parseInt(e.target.dataset.value)
                let pledgeCountValue = pledgeCounter += pledgeBtnValue; 
                pledgeCount.innerText = `${pledgeCountValue} of`;
                localStorage.setItem("pledgeValue", pledgeCountValue);
                console.log(pledgeCountValue);
                if(pledgeCountValue >= 500) {
                        btnContainer.classList.add('disabled');
                        goalContainer.classList.add('complete');
                    }
                    }
                }
            
            const optionClear = () => {
                    const option = document.querySelector('.button-options');
                    console.log(option);
                    if(option.classList.contains('selected')) {
                            e.target.classList.remove('active')
                            e.target.parentElement.parentElement.classList.remove('selected');
                        } else {
                                null
                            }
                        }

                                                 
        pledgeBtns.forEach(pledge => {
            pledge.addEventListener('mousedown', updatePledgeTotal)
                })

//==============================================================================


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




closePledgeModal.addEventListener('click', togglePledgeModal);
projectBtn.addEventListener('click', togglePledgeModal);
about.addEventListener('click', rewardModalToggle);
overlay.addEventListener('click', togglePledgeModal);
closeMobile.addEventListener('click', toggleMobileMenu);
openMobile.addEventListener('click', toggleMobileMenu);




const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const about = document.getElementById("about");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const rewardBtn = document.querySelectorAll(".reward-btn");
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");

//==============================================================================

const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
const fundDataContainer = document.getElementById('.fund-data');
const pledgeBtns = document.querySelectorAll('.pledge-select .pledge-btn');
console.log(pledgeBtns);
const pledgeCount = document.getElementById('pledgeCount');
let newWidth = Number(localStorage.getItem('newWidthStored'))
progressFill.style.width = newWidth + "px"; 

pledgeCount.innerText = 89914;
let pledgeTotal = 89914;
let backersCount = 5007;
let pledgeCounter = parseInt(89914);
let pledgeCountValue = Number(localStorage.getItem('pledgeValue'));
const pledgeCountDisplay = () => {
    console.log('display func called');
    if (pledgeCountValue > 89914) {
        return pledgeCount.innerText = `${pledgeCountValue} of`;
    } else {
        pledgeCount.innerText = 89914;
    }
}
pledgeCountDisplay();
    


const updatePledgeTotal = (e) => {
    // const activePledge = document.querySelector('.custom-pledge-form.active')
    // if(e.target.nextSibling.nextSibling === activePledge){
    //         activePledge.classList.toggle('active');
    //     } else {
        e.preventDefault();
                console.log('Update Pledge Called');
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
                console.log(backersCount);
                const pledgeCount = document.getElementById('pledgeCount');
                let pledgeBtnValue =  parseInt(e.target.dataset.value)
                let pledgeCountValue = pledgeCounter += pledgeBtnValue; 
                pledgeCount.innerText = `${pledgeCountValue} of`;
                localStorage.setItem("pledgeValue", pledgeCountValue);
                console.log(pledgeCountValue);
                // if(pledgeCountValue >= 500) {
                //         btnContainer.classList.add('disabled');
                //         fundDataContainer.classList.add('complete');
                //     }
                    }
                // }
            
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
            pledge.addEventListener('click', updatePledgeTotal)
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




const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const about = document.getElementById("about");
const openMobile = document.getElementById("openMobile");
const closeMobile = document.getElementById("closeMobile");
const projectBtn = document.getElementById("projectBtn");
const rewardBtn = document.querySelectorAll(".reward-btn");
const pledgeModal = document.getElementById("pledgeModal");
const closePledgeModal = document.getElementById("closePledgeModal");
const thankModal = document.getElementById("thankModal");
const thankBtn = document.getElementById("thankBtn");
const bookmarkBtn = document.querySelector(".bookmark-btn");
const bookmarkIcon = document.getElementById("bookmark");
const bookmarkText = document.getElementById("bookmarkP");
//==============================================================================

const progressFill = document.getElementById('progress-fill');
const btnContainer = document.querySelector('.btn-container');
const body = document.querySelector('body');
const fundDataContainer = document.getElementById('.fund-data');
const pledgeBtns = document.querySelectorAll('.pledge-select .pledge-btn');
const pledgeCount = document.getElementById('pledgeCount');
let newWidth = Number(localStorage.getItem('newWidthStored'))
progressFill.style.width = newWidth + "px";   
// Add the percentage of the total pixel width that the 89924 represents to the original newWidth fill value.

let pledgeTotal = 89914;
let backersCount = 5007;
let pledgeCounter = parseInt(89914);
let pledgeCountValue = Number(localStorage.getItem('pledgeValue'));
const pledgeCountDisplay = () => {
    if (pledgeCountValue > 89914) {
        return pledgeCount.innerText = `${pledgeCountValue} of`;
    } else {
        pledgeCount.innerText = 89914;
    }
}
pledgeCountDisplay();
        
        const updatePledgeTotal = (e) => {
            
            e.preventDefault();
        
            const progressFill = document.getElementById('progress-fill');
            let pledgeValue = parseInt(e.target.dataset.value);
            progressFill.style.width = parseInt(pledgeTotal);
                let newWidth = ((pledgeTotal += pledgeValue) / 1000);
                console.log(`pledgeTotal = ${pledgeTotal}`);
                console.log(`pledgeValue = ${pledgeValue}`);
                console.log("newWidth: ",newWidth);
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
                togglePledgeModal();
                toggleThankModal();
                    }
                // }
            
            const optionClear = () => {
                    const option = document.querySelector('.button-options');
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
    // overlay.classList.toggle('active');
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

const toggleThankModal = () => {
    thankModal.classList.toggle('active');
}

const toggleBookMark = () => {
    bookmarkIcon.classList.toggle('active');
    if(bookmarkIcon.classList.contains('active')) {
        bookmarkText.innerText = 'Bookmarked'
        bookmarkText.style.marginLeft = '10px';
    } else {
        bookmarkText.innerText = 'Bookmark'
        bookmarkText.style.marginLeft = '20px';
    };
}



closePledgeModal.addEventListener('click', togglePledgeModal);
projectBtn.addEventListener('click', togglePledgeModal);
about.addEventListener('click', rewardModalToggle);
overlay.addEventListener('click', togglePledgeModal);
closeMobile.addEventListener('click', toggleMobileMenu);
openMobile.addEventListener('click', toggleMobileMenu);
thankBtn.addEventListener('click', toggleThankModal)
bookmarkBtn.addEventListener('click', toggleBookMark)




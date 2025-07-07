// custom cursor 
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function (e) {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});     

// loading functionality 
// let word1 = document.getElementById('word-1')
// let word2 = document.getElementById('word-2')
// let word3 = document.getElementById('word-3')

// let page2Text = document.getElementById('page-2-text')
// let page2Bg = document.getElementById('page-2-bg')
// let page2MainDiv = document.getElementById('page2MainDiv')

// let page1 = document.getElementById('page-1')
// let page2 = document.getElementById('page-2')
// let mainPage = document.getElementById('main-page')

// function revealWord(word) {
//     word.classList.remove('opacity-0', 'translate-y-4');
//     word.classList.add('opacity-100', '-translate-y-0');
// }

// function revealWord2(word) {
//     word.classList.remove('opacity-100', '-translate-y-0');
//     word.classList.add('opacity-0', '-translate-y-4');
// }

// window.addEventListener('DOMContentLoaded', () => {
//     // start page1 animation
//     setTimeout(() => {
//         revealWord(word1);
//         setTimeout(() => {
//             revealWord(word2);
//             setTimeout(() => {
//                 revealWord(word3);

//                 setTimeout(() => {
//                     revealWord2(word1);
//                     revealWord2(word2);
//                     revealWord2(word3);

//                     // page1 change to page2
//                     setTimeout(() => {
//                         page1.classList.add('hidden');
//                         page2.classList.remove('hidden');

//                         // Start page 2 animation
//                         setTimeout(() => {
//                             page2MainDiv.classList.remove('-translate-x-10')
//                             page2Bg.classList.remove('-translate-x-full')

//                             setTimeout(() => {
//                                 page2MainDiv.classList.add('-translate-x-10')
//                                 page2Text.classList.remove('opacity-0')
//                                 page2Bg.classList.add('translate-x-full', 'delay-500')

//                                 setTimeout(() => {
//                                     page2Text.classList.add('transition-all', 'duration-700', 'delay-300', '-translate-y-10', 'opacity-0')

//                                     // page2 change to mainPage
//                                     setTimeout(() => {
//                                         page2.classList.add('hidden')
//                                         mainPage.classList.remove('hidden');
//                                     }, 1200);
//                                 }, 1200)

//                             }, 900);
//                             // Start page 2 animation
//                         }, 600);
//                         // page1 change to page2
//                     }, 600);
//                     // start page1 animation
//                 }, 600);

//             }, 500);
//         }, 500)
//     }, 500);
// })

// nav Meanu 
let NavIcon = document.querySelector('#nav-three-line')
let NavIconLine1 = document.querySelector('#nav-three-line-1')
let NavIconLine2 = document.querySelector('#nav-three-line-2')
let NavIconLine3 = document.querySelector('#nav-three-line-3')
let NavMeanuDiv = document.querySelector('#nav-meanu-div')
let NavMeanucolumn1Items = document.querySelector('#nav-meanu-column-1-items')

NavIcon.addEventListener('click', navMeanuToggle);

function navMeanuToggle() {
    const isOpen = NavMeanuDiv.classList.contains('opacity-100');
    if (isOpen) {
        NavMeanuDiv.classList.remove('opacity-100', 'z-40');
        NavMeanuDiv.classList.add('opacity-0', '-z-10');
        NavMeanucolumn1Items.classList.remove('opacity-100', 'translate-x-0', 'delay-1000');
        NavMeanucolumn1Items.classList.add('opacity-0', '-translate-x-20', 'delay-1000');

        NavIconLine1.classList.remove('rotate-45', 'translate-y-1',)
        NavIconLine2.classList.remove('-rotate-45', '-translate-y-1.5')
        NavIconLine3.classList.remove('opacity-0')

        NavMeanuDiv.classList.add('transition-all', 'duration-400', 'ease-[cubic-bezier(0,0,0.3642,1)]');
        NavMeanucolumn1Items.classList.add('transition-all', 'duration-400', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    } else {
        NavMeanuDiv.classList.remove('opacity-0', '-z-10');
        NavMeanuDiv.classList.add('opacity-100', 'z-40');
        NavMeanuDiv.classList.add('transition-all', 'duration-600', 'ease-[cubic-bezier(0,0,0.3642,1)]');

        NavIconLine1.classList.add('rotate-45', 'translate-y-1')
        NavIconLine2.classList.add('-rotate-45', '-translate-y-1.5')
        NavIconLine3.classList.add('opacity-0')
        // Hide column1 items instantly
        NavMeanucolumn1Items.classList.remove('opacity-100', 'translate-x-0');
        NavMeanucolumn1Items.classList.add('opacity-0', '-translate-x-10');
        NavMeanucolumn1Items.classList.add('transition-all', 'duration-600', 'ease-[cubic-bezier(0,0,0.3642,1)]');
        // Show column1 items after 0.5s
        setTimeout(() => {
            NavMeanucolumn1Items.classList.remove('opacity-0', '-translate-x-10');
            NavMeanucolumn1Items.classList.add('opacity-100', 'translate-x-0');
        }, 500);
    }
}

// nav-meanu-item-heading-1 
let NavMeanuHomePageText = document.querySelector('#nav-meanu-home-page')
let NavMeanuHomeinnerDiv = document.querySelector('#nav-meanu-home-page-innner-div')
let NavMeanuHomePageDot = document.querySelector('#nav-meanu-home-page-dot')
let NavMeanuHomePageList = document.querySelector('#nav-meanu-home-page-list')

NavMeanuHomePageText.addEventListener('click', NavMeanuHomePageclick)

function NavMeanuHomePageclick() {
    //  hide other list if their is any open 
    let otherLists = document.querySelectorAll('#nav-meanu-Portfolio-list, #nav-meanu-Services-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuNewsletterList.classList.remove('opacity-100', '-translate-y-0');
        NavMeanuNewsletterList.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomeinnerDiv.classList.remove('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
        NavMeanuHomeinnerDiv.classList.add('translate-y-0');

        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');
    });

    // Animate the inner div up
    NavMeanuHomeinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuHomeinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuHomePageText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuHomePageDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuHomePageList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuHomePageList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-2

let NavMeanuPortfolioText = document.querySelector('#nav-meanu-Portfolio')
let NavMeanuPortfolioinnerDiv = document.querySelector('#nav-meanu-Portfolio-innner-div')
let NavMeanuPortfolioDot = document.querySelector('#nav-meanu-Portfolio-dot')
let NavMeanuPortfolioList = document.querySelector('#nav-meanu-Portfolio-list')

NavMeanuPortfolioText.addEventListener('click', NavMeanuPortfolioclick)

function NavMeanuPortfolioclick() {
    //  hide other list if their is any open 
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Services-list, #nav-meanu-Portfolio-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');

    });

    // Animate the inner div up
    NavMeanuPortfolioinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuPortfolioinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuPortfolioText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuPortfolioDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuPortfolioList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuPortfolioList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-3

let NavMeanuServicesText = document.querySelector('#nav-meanu-Services')
let NavMeanuServicesinnerDiv = document.querySelector('#nav-meanu-Services-innner-div')
let NavMeanuServicesDot = document.querySelector('#nav-meanu-Services-dot')
let NavMeanuServicesList = document.querySelector('#nav-meanu-Services-list')

NavMeanuServicesText.addEventListener('click', NavMeanuServicesclick)

function NavMeanuServicesclick() {
    //  hide other list if their is any open
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Portfolio-list, #nav-meanu-Services-list, #nav-meanu-Newsletter-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuHomePageList.classList.remove('opacity-100', '-translate-y-0');
        NavMeanuHomePageList.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');
    });

    // Animate the inner div up
    NavMeanuServicesinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuServicesinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuServicesText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuServicesDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuServicesList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuServicesList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-4

let NavMeanuNewsletterText = document.querySelector('#nav-meanu-Newsletter')
let NavMeanuNewsletterinnerDiv = document.querySelector('#nav-meanu-Newsletter-innner-div')
let NavMeanuNewsletterDot = document.querySelector('#nav-meanu-Newsletter-dot')
let NavMeanuNewsletterList = document.querySelector('#nav-meanu-Newsletter-list')

NavMeanuNewsletterText.addEventListener('click', NavMeanuNewsletterclick)

function NavMeanuNewsletterclick() {
    //  hide other list if their is any open
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Portfolio-list, #nav-meanu-Services-list, #nav-meanu-Newsletter-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuHomePageList.classList.remove('opacity-100', '-translate-y-0');
        NavMeanuHomePageList.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5', 'hidden');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
        NavMeanuOtherPagesList.classList.add('translate-y-32', 'opacity-0', 'hidden');
    });

    // Animate the inner div up
    NavMeanuNewsletterinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuNewsletterinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuNewsletterText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuNewsletterDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuNewsletterList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuNewsletterList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}

// nav-meanu-item-heading-5

let NavMeanuOtherPagesText = document.querySelector('#nav-meanu-other-pages')
let NavMeanuOtherPagesinnerDiv = document.querySelector('#nav-meanu-Other-Pages-innner-div')
let NavMeanuOtherPagesDot = document.querySelector('#nav-meanu-Other-Pages-dot')
let NavMeanuOtherPagesList = document.querySelector('#nav-meanu-Other-Pages-list')

NavMeanuOtherPagesText.addEventListener('click', NavMeanuOtherPagesclick)

function NavMeanuOtherPagesclick() {
    //  hide other list if their is any open
    let otherLists = document.querySelectorAll('#nav-meanu-home-page-list, #nav-meanu-Portfolio-list, #nav-meanu-Services-list, #nav-meanu-Newsletter-list');
    otherLists.forEach(list => {
        list.classList.remove('opacity-100', '-translate-y-0');
        list.classList.add('translate-y-32', 'opacity-0', 'hidden');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuPortfolioDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuPortfolioText.classList.remove('translate-x-4');
        NavMeanuServicesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuServicesText.classList.remove('translate-x-4');
        NavMeanuNewsletterDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuNewsletterText.classList.remove('translate-x-4');
        NavMeanuHomePageDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuHomePageText.classList.remove('translate-x-4');
        NavMeanuOtherPagesDot.classList.remove('bg-[#FFA700]', 'w-2.5', 'h-2.5');
        NavMeanuOtherPagesText.classList.remove('translate-x-4');
    });

    // Animate the inner div up
    NavMeanuOtherPagesinnerDiv.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]');
    NavMeanuOtherPagesinnerDiv.classList.remove('translate-y-0');

    // Move the text to the right
    NavMeanuOtherPagesText.classList.add('translate-x-4');

    // Animate the dot
    NavMeanuOtherPagesDot.classList.add('bg-[#FFA700]', 'w-2.5', 'h-2.5');

    // Show and animate the list
    NavMeanuOtherPagesList.classList.add('transition-all', 'duration-300', 'ease-[cubic-bezier(0,0,0.3642,1)]', 'opacity-100', '-translate-y-0');
    NavMeanuOtherPagesList.classList.remove('translate-y-32', 'opacity-0', 'hidden');
}


// customer-img1
let customerImg1Border = document.getElementById('customer-img1-border');
let customerImg1BorderDiv = document.getElementById('customer-img1-border-div');

customerImg1Border.classList.remove('border-white');
customerImg1Border.classList.add('border-[#FF9800]', 'border-4');

if (customerImg1BorderDiv && customerImg1Border) {
    customerImg1BorderDiv.addEventListener('click', borderChange1);
}

let yellow1 = true;
function borderChange1() {
    if (yellow1) {
        customerImg1Border.classList.remove('border-white');
        customerImg1Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img2

let customerImg2Border = document.getElementById('customer-img2-border');
let customerImg2BorderDiv = document.getElementById('customer-img2-border-div');

if (customerImg2BorderDiv && customerImg2Border) {
    customerImg2BorderDiv.addEventListener('click', borderChange2);
}
let yellow2 = true;
function borderChange2() {
    if (yellow2) {
        customerImg2Border.classList.remove('border-white');
        customerImg2Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img3

let customerImg3Border = document.getElementById('customer-img3-border');
let customerImg3BorderDiv = document.getElementById('customer-img3-border-div');

if (customerImg3BorderDiv && customerImg3Border) {
    customerImg3BorderDiv.addEventListener('click', borderChange3);
}
let yellow3 = true;
function borderChange3() {
    if (yellow3) {
        customerImg3Border.classList.remove('border-white');
        customerImg3Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img4

let customerImg4Border = document.getElementById('customer-img4-border');
let customerImg4BorderDiv = document.getElementById('customer-img4-border-div');

if (customerImg4BorderDiv && customerImg4Border) {
    customerImg4BorderDiv.addEventListener('click', borderChange4);
}
let yellow4 = true;
function borderChange4() {
    if (yellow4) {
        customerImg4Border.classList.remove('border-white');
        customerImg4Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img5

let customerImg5Border = document.getElementById('customer-img5-border');
let customerImg5BorderDiv = document.getElementById('customer-img5-border-div');

if (customerImg5BorderDiv && customerImg5Border) {
    customerImg5BorderDiv.addEventListener('click', borderChange5);
}
let yellow5 = true;
function borderChange5() {
    if (yellow5) {
        customerImg5Border.classList.remove('border-white');
        customerImg5Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img6

let customerImg6Border = document.getElementById('customer-img6-border');
let customerImg6BorderDiv = document.getElementById('customer-img6-border-div');

if (customerImg6BorderDiv && customerImg6Border) {
    customerImg6BorderDiv.addEventListener('click', borderChange6);
}
let yellow6 = true;
function borderChange6() {
    if (yellow6) {
        customerImg6Border.classList.remove('border-white');
        customerImg6Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg7Border.classList.add('border-white');
        customerImg7Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}
// customer-img7

let customerImg7Border = document.getElementById('customer-img7-border');
let customerImg7BorderDiv = document.getElementById('customer-img7-border-div');

if (customerImg7BorderDiv && customerImg7Border) {
    customerImg7BorderDiv.addEventListener('click', borderChange7);
}
let yellow7 = true;
function borderChange7() {
    if (yellow7) {
        customerImg7Border.classList.remove('border-white');
        customerImg7Border.classList.add('border-[#FF9800]', 'border-4');
        customerImg6Border.classList.add('border-white');
        customerImg6Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg5Border.classList.add('border-white');
        customerImg5Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg4Border.classList.add('border-white');
        customerImg4Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg3Border.classList.add('border-white');
        customerImg3Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg2Border.classList.add('border-white');
        customerImg2Border.classList.remove('border-[#FF9800]', 'border-4');
        customerImg1Border.classList.add('border-white');
        customerImg1Border.classList.remove('border-[#FF9800]', 'border-4');
    }
}

// slider
const leftSideArrow = document.getElementById('left-side-arrow');
const rideSideArrow = document.getElementById('right-side-arrow');
const slider = document.getElementById('reviews-slider');

let currentTranslate = 0;
const totalSlides = slider.children.length;

leftSideArrow.addEventListener('click', () => {
    if (currentTranslate < 0) {
        currentTranslate += 100;
        slider.style.transform = `translateX(${currentTranslate}%)`;
    }

});

rideSideArrow.addEventListener('click', () => {
    if (Math.abs(currentTranslate) < (totalSlides - 1) * 100) {
        currentTranslate -= 100;
        slider.style.transform = `translateX(${currentTranslate}%)`;
    }
});




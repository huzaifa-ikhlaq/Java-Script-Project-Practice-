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
const reviews = [
    document.getElementById("customer-review1"),
    document.getElementById("customer-review2"),
    document.getElementById("customer-review3"),
    document.getElementById("customer-review4"),
    document.getElementById("customer-review5"),
    document.getElementById("customer-review6"),
    document.getElementById("customer-review7"),
];

let current = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        if (i === index) {
            review.classList.remove("opacity-0", "translate-x-full", "absolute");
            review.classList.add("opacity-100", "translate-x-0", "relative");
        } else {
            review.classList.remove("opacity-100", "translate-x-0", "relative");
            review.classList.add("opacity-0", "translate-x-full", "absolute");
        }
    });
}

document.getElementById("left-side-arrow").addEventListener("click", () => {
    current = (current - 1 + reviews.length) % reviews.length;
    showReview(current);
});

document.getElementById("right-side-arrow").addEventListener("click", () => {
    current = (current + 1) % reviews.length;
    showReview(current);
});

showReview(current);

// footer input 
const footerInput = document.getElementById('footerInput')

footerInput.addEventListener('input', function () {
    this.value = this.value.toUpperCase()

})

// Selection - 2 nav color function

// const logo = document.getElementById('nav-logo');
// const line1 = document.getElementById('nav-three-line-1');
// const line2 = document.getElementById('nav-three-line-2');
// const line3 = document.getElementById('nav-three-line-3');

// const marker = document.getElementById('white-section');

// const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // white section is showing
//                 logo.classList.remove('text-white');
//                 logo.classList.add('text-black');

//                 line1.classList.remove('bg-white');
//                 line1.classList.add('bg-black');

//                 line2.classList.remove('bg-white');
//                 line2.classList.add('bg-black');

//                 line3.classList.remove('bg-white');
//                 line3.classList.add('bg-black');
//             } else {
//                 // black section is showing
//                 logo.classList.remove('text-black');
//                 logo.classList.add('text-white');

//                 line1.classList.remove('bg-black');
//                 line1.classList.add('bg-white');

//                 line2.classList.remove('bg-black');
//                 line2.classList.add('bg-white');

//                 line3.classList.remove('bg-black');
//                 line3.classList.add('bg-white');
//             }
//         });
//     },
//     {
//         root: null,
//         threshold: 0,
//     }
// );

// observer.observe(marker);


// // dodecahedron 1
// const scene1 = new THREE.Scene();
// const camera1 = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );
// camera1.position.z = 10;
// const renderer1 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
// renderer1.setClearColor(0x000000, 0);
// renderer1.setSize(window.innerWidth, window.innerHeight);
// renderer1.domElement.id = 'dodecahedron-canvas';
// const dodecahedronBg1 = document.getElementById('dodecahedron-bg');
// if (dodecahedronBg1) {
//     renderer1.domElement.style.position = 'absolute';
//     renderer1.domElement.style.top = '-100px';
//     renderer1.domElement.style.left = '500px';
//     renderer1.domElement.style.width = '100%';
//     renderer1.domElement.style.height = '100%';
//     renderer1.domElement.style.zIndex = '0';
//     renderer1.domElement.style.pointerEvents = 'none';
//     dodecahedronBg1.appendChild(renderer1.domElement);
// }
// const size1 = 6; // Smaller size for a smaller hole
// const geometry1 = new THREE.DodecahedronGeometry(size1);
// const edges1 = new THREE.EdgesGeometry(geometry1);
// const lineMaterial1 = new THREE.LineBasicMaterial({
//     color: 0xffffff,
//     transparent: true,
//     opacity: 0.7
// });
// const line1 = new THREE.LineSegments(edges1, lineMaterial1);
// scene1.add(line1);

// // dodecahedron 2
// const scene2 = new THREE.Scene();
// const camera2 = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );

// // dodecahedron2
// camera2.position.z = 10;
// const renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
// renderer2.setClearColor(0x000000, 0); // Set to fully transparent
// renderer2.setSize(window.innerWidth, window.innerHeight);
// renderer2.domElement.id = 'dodecahedron-canvas2';
// const dodecahedronBg2 = document.getElementById('dodecahedron-bg2');
// if (dodecahedronBg2) {
//     renderer2.domElement.style.position = 'absolute';
//     renderer2.domElement.style.top = '300px';
//     renderer2.domElement.style.left = '100px';
//     renderer2.domElement.style.width = '100%';
//     renderer2.domElement.style.height = '100%';
//     renderer2.domElement.style.zIndex = '0';
//     renderer2.domElement.style.pointerEvents = 'none';
//     dodecahedronBg2.appendChild(renderer2.domElement);
// }
// const size2 = 2;
// const geometry2 = new THREE.DodecahedronGeometry(size2);
// const edges2 = new THREE.EdgesGeometry(geometry2);
// const lineMaterial2 = new THREE.LineBasicMaterial({
//     color: 0xffffff,
//     transparent: true,
//     opacity: 0.5
// });
// const line2 = new THREE.LineSegments(edges2, lineMaterial2);
// scene2.add(line2);

// // dodecahedron 3
// const scene3 = new THREE.Scene();
// const camera3 = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );
// camera3.position.z = 10;
// const renderer3 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
// renderer3.setClearColor(0x000000, 0); // Set to fully transparent
// renderer3.setSize(window.innerWidth, window.innerHeight);
// renderer3.domElement.id = 'dodecahedron-canvas3';
// const dodecahedronBg3 = document.getElementById('dodecahedron-bg3');
// if (dodecahedronBg3) {
//     renderer3.domElement.style.position = 'absolute';
//     renderer3.domElement.style.top = '-280px'; // Move to top
//     renderer3.domElement.style.left = '-370px'; // Move to left
//     renderer3.domElement.style.width = '100%'; // Fixed size for visibility
//     renderer3.domElement.style.height = '100%';
//     renderer3.domElement.style.zIndex = '1'; // Above the others if needed
//     renderer3.domElement.style.pointerEvents = 'none';
//     dodecahedronBg3.appendChild(renderer3.domElement);
// }
// const size3 = 4; // Smaller size for better fit
// const geometry3 = new THREE.DodecahedronGeometry(size3);
// const edges3 = new THREE.EdgesGeometry(geometry3);
// const lineMaterial3 = new THREE.LineBasicMaterial({
//     color: 0xffffff,
//     transparent: true,
//     opacity: 0.6
// });
// const line3 = new THREE.LineSegments(edges3, lineMaterial3);
// scene3.add(line3);

// // Animation loops
// function animate1() {
//     requestAnimationFrame(animate1);
//     line1.rotation.x += 0.001;
//     line1.rotation.y += 0.001;
//     renderer1.render(scene1, camera1);
// }
// function animate2() {
//     requestAnimationFrame(animate2);
//     line2.rotation.x -= 0.001;
//     line2.rotation.y -= 0.001;
//     renderer2.render(scene2, camera2);
// }
// function animate3() {
//     requestAnimationFrame(animate3);
//     line3.rotation.x += 0.001;
//     line3.rotation.y -= 0.001;
//     renderer3.render(scene3, camera3);
// }
// animate1();
// animate2();
// animate3();

// // Responsive resize
// window.addEventListener('resize', () => {
//     camera1.aspect = window.innerWidth / window.innerHeight;
//     camera1.updateProjectionMatrix();
//     renderer1.setSize(window.innerWidth, window.innerHeight);
//     camera2.aspect = window.innerWidth / window.innerHeight;
//     camera2.updateProjectionMatrix();
//     renderer2.setSize(window.innerWidth, window.innerHeight);
//     camera3.aspect = window.innerWidth / window.innerHeight;
//     camera3.updateProjectionMatrix();
//     renderer3.setSize(window.innerWidth, window.innerHeight);
// });


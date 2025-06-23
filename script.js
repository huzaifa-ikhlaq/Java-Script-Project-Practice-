let moonparent = document.querySelector("#moonparent");
let logoparent = document.querySelector("#logoparent");

moonparent.addEventListener("click", change);

let sun = localStorage.getItem("theme") !== "dark";

setTheme(sun);

function change() {
  // sun = !sun
  setTheme(!sun);
}

function setTheme(mode) {
  sun = mode;

  if (sun) {
    moonparent.innerHTML = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0581 14.2166C12.3522 14.2166 14.212 12.3569 14.212 10.0628C14.212 7.7687 12.3522 5.90897 10.0581 5.90897C7.76403 5.90897 5.9043 7.7687 5.9043 10.0628C5.9043 12.3569 7.76403 14.2166 10.0581 14.2166Z" fill="#FFC05A"></path><path d="M10 1V2.63636" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 17.3637V19.0001" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.63477 3.63455L4.79658 4.79637" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.2031 15.2036L16.3649 16.3654" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 10.0001H2.63636" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3652 10.0001H19.0016" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.63477 16.3654L4.79658 15.2036" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.2031 4.79637L16.3649 3.63455" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
    logoparent.innerHTML = `<img src="img-2/logo-red.webp" alt="">`;
    localStorage.setItem("theme", "light");
    document.documentElement.classList.add("dark");
  } else {
    moonparent.innerHTML = ` <svg width="14" height="14" viewBox="0 0 14 14" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.63063C13.8774 8.95738 13.3795 10.2218 12.5645 11.2759C11.7495 12.33 10.6512 13.1301 9.39801 13.5828C8.14485 14.0354 6.78869 14.1218 5.48822 13.8319C4.18775 13.5419 2.99676 12.8875 2.05461 11.9454C1.11246 11.0032 0.458115 9.81225 0.168141 8.51178C-0.121832 7.21131 -0.0354396 5.85515 0.41721 4.60199C0.86986 3.34883 1.67005 2.2505 2.72413 1.43552C3.77822 0.620536 5.04262 0.122609 6.36937 0C5.5926 1.05088 5.21881 2.34566 5.31599 3.64884C5.41317 4.95202 5.97487 6.17704 6.89892 7.10109C7.82296 8.02513 9.04798 8.58683 10.3512 8.68401C11.6543 8.78119 12.9491 8.4074 14 7.63063Z"fill="#fff"> </path></svg>`;
    logoparent.innerHTML = `<img src="img-2/logo-white.webp" alt="">`;
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.remove("dark");
  }
}

// nav-scroll
let lastscroll = 0;
let nav = document.getElementById("main-nav");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastscroll) {
    nav.classList.add("-translate-y-full");
  } else {
    nav.classList.remove("-translate-y-full");
  }
  lastscroll = currentScroll <= 0 ? 0 : currentScroll;
});
// meanu open
let navMeanu = document.querySelector("#navMeanu");
let navMeanu1 = document.querySelector("#navMeanu1");
let navMeanu2 = document.querySelector("#navMeanu2");
let mainNav_text1 = document.querySelector("#navMeanu1_text1");
let mainNav_text2 = document.querySelector("#navMeanu2_text2");
let mainNav_ul = document.querySelector("#navMeanu2_ul");
let three = document.querySelector("#three");
let goTop = document.querySelector("#gotop");
let closeBtn = document.querySelector("#closebtn");
let mainNav = document.querySelector("#main-nav");
three.addEventListener("click", navOpen);

function navOpen() {
  // document.body.classList.add("overflow-hidden");
  navMeanu.classList.toggle("z-50");
  navMeanu1.classList.toggle("-translate-y-full");
  navMeanu2.classList.toggle("translate-y-full");
  goTop.classList.toggle("hidden");
  mainNav.classList.remove("z-60");
  mainNav_text2.classList.remove("opacity-100");
  navMeanu1_text1.classList.remove("opacity-100");
  setTimeout(() => {
    mainNav_text2.classList.add("opacity-100");
    navMeanu1_text1.classList.add("opacity-100");
  }, 1000);
  // navMeanu2_ul.classList.remove("translate-y-full");
  setTimeout(() => {
    navMeanu2_ul.classList.remove("opacity-0", "translate-y-full");
  }, 1000);
}

closeBtn.addEventListener("click", navclose);

function navclose() {
  // document.body.classList.remove("overflow-hidden");
  navMeanu.classList.toggle("z-50");
  navMeanu1.classList.toggle("-translate-y-full");
  navMeanu2.classList.toggle("translate-y-full");
  goTop.classList.toggle("hidden");
  setTimeout(() => {
    mainNav.classList.add("z-60");
  }, 1000);
  mainNav_text2.classList.remove("opacity-100");
  navMeanu1_text1.classList.remove("opacity-100");
  navMeanu2_ul.classList.add("opacity-0", "translate-y-full");
}

// cheak-text-hover
const menuRows1 = document.querySelector(".menu-row-1");
const menuRows2 = document.querySelector(".menu-row-2");
const menuRows3 = document.querySelector(".menu-row-3");
const menuRows4 = document.querySelector(".menu-row-4");
const menuRows5 = document.querySelector(".menu-row-5");
const menuRows6 = document.querySelector(".menu-row-6");
//  row-1
let hovered1 = menuRows1.addEventListener("mouseenter", function () {
  menuRows2.classList.remove("text-white");
  menuRows2.classList.add("text-[#55585b]");
  menuRows3.classList.remove("text-white");
  menuRows3.classList.add("text-[#55585b]");
  menuRows4.classList.remove("text-white");
  menuRows4.classList.add("text-[#55585b]");
  menuRows5.classList.remove("text-white");
  menuRows5.classList.add("text-[#55585b]");
  menuRows6.classList.remove("text-white");
  menuRows6.classList.add("text-[#55585b]");
});
let unHovered1 = menuRows1.addEventListener("mouseleave", function () {
  menuRows2.classList.add("text-white");
  menuRows2.classList.remove("text-[#55585b]");
  menuRows3.classList.add("text-white");
  menuRows3.classList.remove("text-[#55585b]");
  menuRows4.classList.add("text-white");
  menuRows4.classList.remove("text-[#55585b]");
  menuRows5.classList.add("text-white");
  menuRows5.classList.remove("text-[#55585b]");
  menuRows6.classList.add("text-white");
  menuRows6.classList.remove("text-[#55585b]");
});
//  row-2
let hovered2 = menuRows2.addEventListener("mouseenter", function () {
  menuRows1.classList.remove("text-white");
  menuRows1.classList.add("text-[#55585b]");
  menuRows3.classList.remove("text-white");
  menuRows3.classList.add("text-[#55585b]");
  menuRows4.classList.remove("text-white");
  menuRows4.classList.add("text-[#55585b]");
  menuRows5.classList.remove("text-white");
  menuRows5.classList.add("text-[#55585b]");
  menuRows6.classList.remove("text-white");
  menuRows6.classList.add("text-[#55585b]");
});
let unHovered2 = menuRows2.addEventListener("mouseleave", function () {
  menuRows1.classList.add("text-white");
  menuRows1.classList.remove("text-[#55585b]");
  menuRows3.classList.add("text-white");
  menuRows3.classList.remove("text-[#55585b]");
  menuRows4.classList.add("text-white");
  menuRows4.classList.remove("text-[#55585b]");
  menuRows5.classList.add("text-white");
  menuRows5.classList.remove("text-[#55585b]");
  menuRows6.classList.add("text-white");
  menuRows6.classList.remove("text-[#55585b]");
});
//  row-3
let hovered3 = menuRows3.addEventListener("mouseenter", function () {
  menuRows1.classList.remove("text-white");
  menuRows1.classList.add("text-[#55585b]");
  menuRows2.classList.remove("text-white");
  menuRows2.classList.add("text-[#55585b]");
  menuRows4.classList.remove("text-white");
  menuRows4.classList.add("text-[#55585b]");
  menuRows5.classList.remove("text-white");
  menuRows5.classList.add("text-[#55585b]");
  menuRows6.classList.remove("text-white");
  menuRows6.classList.add("text-[#55585b]");
});
let unHovered3 = menuRows3.addEventListener("mouseleave", function () {
  menuRows1.classList.add("text-white");
  menuRows1.classList.remove("text-[#55585b]");
  menuRows2.classList.add("text-white");
  menuRows2.classList.remove("text-[#55585b]");
  menuRows4.classList.add("text-white");
  menuRows4.classList.remove("text-[#55585b]");
  menuRows5.classList.add("text-white");
  menuRows5.classList.remove("text-[#55585b]");
  menuRows6.classList.add("text-white");
  menuRows6.classList.remove("text-[#55585b]");
});
//  row-4
let hovered4 = menuRows4.addEventListener("mouseenter", function () {
  menuRows1.classList.remove("text-white");
  menuRows1.classList.add("text-[#55585b]");
  menuRows2.classList.remove("text-white");
  menuRows2.classList.add("text-[#55585b]");
  menuRows3.classList.remove("text-white");
  menuRows3.classList.add("text-[#55585b]");
  menuRows5.classList.remove("text-white");
  menuRows5.classList.add("text-[#55585b]");
  menuRows6.classList.remove("text-white");
  menuRows6.classList.add("text-[#55585b]");
});
let unHovered4 = menuRows4.addEventListener("mouseleave", function () {
  menuRows1.classList.add("text-white");
  menuRows1.classList.remove("text-[#55585b]");
  menuRows2.classList.add("text-white");
  menuRows2.classList.remove("text-[#55585b]");
  menuRows3.classList.add("text-white");
  menuRows3.classList.remove("text-[#55585b]");
  menuRows5.classList.add("text-white");
  menuRows5.classList.remove("text-[#55585b]");
  menuRows6.classList.add("text-white");
  menuRows6.classList.remove("text-[#55585b]");
});
//  row-5
let hovered5 = menuRows5.addEventListener("mouseenter", function () {
  menuRows1.classList.remove("text-white");
  menuRows1.classList.add("text-[#55585b]");
  menuRows2.classList.remove("text-white");
  menuRows2.classList.add("text-[#55585b]");
  menuRows3.classList.remove("text-white");
  menuRows3.classList.add("text-[#55585b]");
  menuRows4.classList.remove("text-white");
  menuRows4.classList.add("text-[#55585b]");
  menuRows6.classList.remove("text-white");
  menuRows6.classList.add("text-[#55585b]");
});
let unHovered5 = menuRows5.addEventListener("mouseleave", function () {
  menuRows1.classList.add("text-white");
  menuRows1.classList.remove("text-[#55585b]");
  menuRows2.classList.add("text-white");
  menuRows2.classList.remove("text-[#55585b]");
  menuRows3.classList.add("text-white");
  menuRows3.classList.remove("text-[#55585b]");
  menuRows4.classList.add("text-white");
  menuRows4.classList.remove("text-[#55585b]");
  menuRows6.classList.add("text-white");
  menuRows6.classList.remove("text-[#55585b]");
});
//  row-6
let hovered6 = menuRows6.addEventListener("mouseenter", function () {
  menuRows1.classList.remove("text-white");
  menuRows1.classList.add("text-[#55585b]");
  menuRows2.classList.remove("text-white");
  menuRows2.classList.add("text-[#55585b]");
  menuRows3.classList.remove("text-white");
  menuRows3.classList.add("text-[#55585b]");
  menuRows4.classList.remove("text-white");
  menuRows4.classList.add("text-[#55585b]");
  menuRows5.classList.remove("text-white");
  menuRows5.classList.add("text-[#55585b]");
});
let unHovered6 = menuRows6.addEventListener("mouseleave", function () {
  menuRows1.classList.add("text-white");
  menuRows1.classList.remove("text-[#55585b]");
  menuRows2.classList.add("text-white");
  menuRows2.classList.remove("text-[#55585b]");
  menuRows3.classList.add("text-white");
  menuRows3.classList.remove("text-[#55585b]");
  menuRows4.classList.add("text-white");
  menuRows4.classList.remove("text-[#55585b]");
  menuRows5.classList.add("text-white");
  menuRows5.classList.remove("text-[#55585b]");
});
//  meanu-nav-item-open
// row-1
let meanuItems1 = document.querySelector("#meanu-items-1");
let itemsPlus1 = document.querySelector("#items-plus-1");

itemsPlus1.addEventListener("click", openItems1);

function openItems1() {
  meanuItems1.classList.toggle("hidden");
  itemsPlus1.classList.toggle("rotate-134");
}
// row-3
let meanuItems3 = document.querySelector("#meanu-items-3");
let itemsPlus3 = document.querySelector("#items-plus-3");

itemsPlus3.addEventListener("click", openItems3);

function openItems3() {
  meanuItems3.classList.toggle("hidden");
  itemsPlus3.classList.toggle("rotate-134");
}
// row-4
let meanuItems4 = document.querySelector("#meanu-items-4");
let itemsPlus4 = document.querySelector("#items-plus-4");

itemsPlus4.addEventListener("click", openItems4);

function openItems4() {
  meanuItems4.classList.toggle("hidden");
  itemsPlus4.classList.toggle("rotate-134");
}
// row-5
let meanuItems5 = document.querySelector("#meanu-items-5");
let itemsPlus5 = document.querySelector("#items-plus-5");

itemsPlus5.addEventListener("click", openItems5);

function openItems5() {
  meanuItems5.classList.toggle("hidden");
  itemsPlus5.classList.toggle("rotate-134");
}
// Custom Cursor Movement
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// section-1
let sectionimg1 = document.querySelector(".howerDemoImg-1 ");
sectionimg1.addEventListener("mouseenter", function (e) {
  cursor.classList.add("hidden");
});

sectionimg1.addEventListener("mouseleave", function () {
  cursor.classList.remove("hidden");
});

// img1
const cursordemo1 = document.querySelector(".custom-cursor-demo-1");

document.addEventListener("mousemove", function (e) {
  cursordemo1.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo1.classList.add("flex", "justify-center", "items-center", "leading-5");
  cursordemo1.innerHTML = "View <br> Demo";
});

let img1 = document.querySelector(".howerDemoImg-1 ");

img1.addEventListener("mouseenter", function (e) {
  cursordemo1.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo1.classList.add("custom-cursor-demo-1");
  cursordemo1.classList.remove("hidden");
});

img1.addEventListener("mouseleave", function () {
  cursordemo1.classList.add("hidden");
});
// section-2
let sectionimg2 = document.querySelector(".howerDemoImg-2 ");
sectionimg2.addEventListener("mouseenter", function (e) {
  cursor.classList.add("hidden");
});

sectionimg2.addEventListener("mouseleave", function () {
  cursor.classList.remove("hidden");
});

// img2
const cursordemo2 = document.querySelector(".custom-cursor-demo-2");

document.addEventListener("mousemove", function (e) {
  cursordemo2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo2.classList.add("flex", "justify-center", "items-center", "leading-5");
  cursordemo2.innerHTML = "View <br> Demo";
});

let img2 = document.querySelector(".howerDemoImg-2 ");

img2.addEventListener("mouseenter", function (e) {
  cursordemo2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo2.classList.add("custom-cursor-demo-2");
  cursordemo2.classList.remove("hidden");
});

img2.addEventListener("mouseleave", function () {
  cursordemo2.classList.add("hidden");
});
// section-3
let sectionimg3 = document.querySelector(".howerDemoImg-3 ");
sectionimg3.addEventListener("mouseenter", function (e) {
  cursor.classList.add("hidden");
});

sectionimg3.addEventListener("mouseleave", function () {
  cursor.classList.remove("hidden");
});

// img3
const cursordemo3 = document.querySelector(".custom-cursor-demo-3");

document.addEventListener("mousemove", function (e) {
  cursordemo3.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo3.classList.add("flex", "justify-center", "items-center", "leading-5");
  cursordemo3.innerHTML = "View <br> Demo";
});

let img3 = document.querySelector(".howerDemoImg-3 ");

img3.addEventListener("mouseenter", function (e) {
  cursordemo3.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo3.classList.add("custom-cursor-demo-3");
  cursordemo3.classList.remove("hidden");
});

img3.addEventListener("mouseleave", function () {
  cursordemo3.classList.add("hidden");
});
// section-4
let sectionimg4 = document.querySelector(".howerDemoImg-4 ");
sectionimg4.addEventListener("mouseenter", function (e) {
  cursor.classList.add("hidden");
});

sectionimg4.addEventListener("mouseleave", function () {
  cursor.classList.remove("hidden");
});

// img4
const cursordemo4 = document.querySelector(".custom-cursor-demo-4");

document.addEventListener("mousemove", function (e) {
  cursordemo4.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo4.classList.add("flex", "justify-center", "items-center", "leading-5");
  cursordemo4.innerHTML = "View <br> Demo";
});

let img4 = document.querySelector(".howerDemoImg-4 ");

img4.addEventListener("mouseenter", function (e) {
  cursordemo4.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursordemo4.classList.add("custom-cursor-demo-4");
  cursordemo4.classList.remove("hidden");
});

img4.addEventListener("mouseleave", function () {
  cursordemo4.classList.add("hidden");
});
// section-5
//   row-1
const cursorimg1 = document.querySelector(".custom-cursor-img-1");

document.addEventListener("mousemove", function (e) {
  cursorimg1.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let row1 = document.querySelector(".howerImgRow-1 ");

row1.addEventListener("mouseenter", function (e) {
  cursorimg1.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursorimg1.classList.add("custom-cursor-img-1");
  cursorimg1.classList.remove("hidden");
});

row1.addEventListener("mouseleave", function () {
  cursorimg1.classList.remove("custom-cursor-img-1");
});
//   row-2
const cursorimg2 = document.querySelector(".custom-cursor-img-2");

document.addEventListener("mousemove", function (e) {
  cursorimg2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let row2 = document.querySelector(".howerImgRow-2 ");

row2.addEventListener("mouseenter", function (e) {
  cursorimg2.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursorimg2.classList.add("custom-cursor-img-2");
  cursorimg2.classList.remove("hidden");
});

row2.addEventListener("mouseleave", function () {
  cursorimg2.classList.remove("custom-cursor-img-2");
});
//   row-3
const cursorimg3 = document.querySelector(".custom-cursor-img-3");

document.addEventListener("mousemove", function (e) {
  cursorimg3.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let row3 = document.querySelector(".howerImgRow-3 ");

row3.addEventListener("mouseenter", function (e) {
  cursorimg3.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursorimg3.classList.add("custom-cursor-img-3");
  cursorimg3.classList.remove("hidden");
});

row3.addEventListener("mouseleave", function () {
  cursorimg3.classList.remove("custom-cursor-img-3");
});
//   row-4
const cursorimg4 = document.querySelector(".custom-cursor-img-4");

document.addEventListener("mousemove", function (e) {
  cursorimg4.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let row4 = document.querySelector(".howerImgRow-4 ");

row4.addEventListener("mouseenter", function (e) {
  cursorimg4.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursorimg4.classList.add("custom-cursor-img-4");
  cursorimg4.classList.remove("hidden");
});

row4.addEventListener("mouseleave", function () {
  cursorimg4.classList.remove("custom-cursor-img-4");
});
//   row-5
const cursorimg5 = document.querySelector(".custom-cursor-img-5");

document.addEventListener("mousemove", function (e) {
  cursorimg5.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let row5 = document.querySelector(".howerImgRow-5 ");

row5.addEventListener("mouseenter", function (e) {
  cursorimg5.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursorimg5.classList.add("custom-cursor-img-5");
  cursorimg5.classList.remove("hidden");
});

row5.addEventListener("mouseleave", function () {
  cursorimg5.classList.remove("custom-cursor-img-5");
});

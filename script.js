let sun = false;
let moonparent = document.querySelector("#moonparent");
let logoparent = document.querySelector("#logoparent");
moonparent.addEventListener("click", change);
logoparent.addEventListener(change);
function change() {
  if (!sun) {
    moonparent.classList.add("pl-1");
    moonparent.innerHTML = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0581 14.2166C12.3522 14.2166 14.212 12.3569 14.212 10.0628C14.212 7.7687 12.3522 5.90897 10.0581 5.90897C7.76403 5.90897 5.9043 7.7687 5.9043 10.0628C5.9043 12.3569 7.76403 14.2166 10.0581 14.2166Z" fill="#FFC05A"></path><path d="M10 1V2.63636" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 17.3637V19.0001" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.63477 3.63455L4.79658 4.79637" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.2031 15.2036L16.3649 16.3654" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 10.0001H2.63636" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3652 10.0001H19.0016" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.63477 16.3654L4.79658 15.2036" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.2031 4.79637L16.3649 3.63455" stroke="#FFC05A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'`;
  } else {
    moonparent.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.63063C13.8774 8.95738 13.3795 10.2218 12.5645 11.2759C11.7495 12.33 10.6512 13.1301 9.39801 13.5828C8.14485 14.0354 6.78869 14.1218 5.48822 13.8319C4.18775 13.5419 2.99676 12.8875 2.05461 11.9454C1.11246 11.0032 0.458115 9.81225 0.168141 8.51178C-0.121832 7.21131 -0.0354396 5.85515 0.41721 4.60199C0.86986 3.34883 1.67005 2.2505 2.72413 1.43552C3.77822 0.620536 5.04262 0.122609 6.36937 0C5.5926 1.05088 5.21881 2.34566 5.31599 3.64884C5.41317 4.95202 5.97487 6.17704 6.89892 7.10109C7.82296 8.02513 9.04798 8.58683 10.3512 8.68401C11.6543 8.78119 12.9491 8.4074 14 7.63063Z"fill="#fff"> </path></svg>`;
  }

  if (!sun) {
    logoparent.innerHTML = ` <img src="img-2/logo-red.webp" alt="">`;
  } else {
    logoparent.innerHTML = `<img src="img-2/logo-white.webp" alt="">`;
  }
  sun = !sun;
}
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

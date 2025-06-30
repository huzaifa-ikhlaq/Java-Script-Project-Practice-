let word1 = document.getElementById('word-1')
let word2 = document.getElementById('word-2')
let word3 = document.getElementById('word-3')

let page2Text = document.getElementById('page-2-text')
let page2Bg = document.getElementById('page-2-bg')
let page2MainDiv = document.getElementById('page2MainDiv')

let page1 = document.getElementById('page-1')
let page2 = document.getElementById('page-2')
let mainPage = document.getElementById('main-page')

function revealWord(word) {
    word.classList.remove('opacity-0', 'translate-y-4');
    word.classList.add('opacity-100', '-translate-y-0');
}

function revealWord2(word) {
    word.classList.remove('opacity-100', '-translate-y-0');
    word.classList.add('opacity-0', '-translate-y-4');
}

window.addEventListener('DOMContentLoaded', () => {
    // start page1 animation
    setTimeout(() => {
        revealWord(word1);
        setTimeout(() => {
            revealWord(word2);
            setTimeout(() => {
                revealWord(word3);

                setTimeout(() => {
                    revealWord2(word1);
                    revealWord2(word2);
                    revealWord2(word3);

                    // page1 change to page2
                    setTimeout(() => {
                        page1.classList.add('hidden');
                        page2.classList.remove('hidden');

                        // Start page 2 animation
                        setTimeout(() => {
                            page2MainDiv.classList.remove('-translate-x-10')
                            page2Bg.classList.remove('-translate-x-full')

                            setTimeout(() => {
                                page2MainDiv.classList.add('-translate-x-10')
                                page2Text.classList.remove('opacity-0')
                                page2Bg.classList.add('translate-x-full', 'delay-500')

                                setTimeout(() => {
                                    page2Text.classList.add('transition-all', 'duration-700', 'delay-300', '-translate-y-10', 'opacity-0')

                                    // page2 change to mainPage
                                    setTimeout(() => {
                                        page2.classList.add('hidden')
                                        mainPage.classList.remove('hidden');
                                    }, 1200);
                                }, 1200)

                            }, 900);
                            // Start page 2 animation
                        }, 600);
                        // page1 change to page2
                    }, 600);
                    // start page1 animation
                }, 600);

            }, 500);
        }, 500)
    }, 500);
})

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

let NavMeanuHomePageText = document.querySelector('#nav-meanu-home-page')
let NavMeanuHomeinnerDiv = document.querySelector('#nav-meanu-home-page-innner-div')
let NavMeanuHomePageDot = document.querySelector('#nav-meanu-home-page-dot')
let NavMeanuHomePageList = document.querySelector('#nav-meanu-home-page-list')

NavMeanuHomePageText.addEventListener('click', NavMeanuHomePageclick)

function NavMeanuHomePageclick() {
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

// dodecahedron 1
const scene1 = new THREE.Scene();
const camera1 = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera1.position.z = 10;
const renderer1 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer1.setClearColor(0x000000, 0);
renderer1.setSize(window.innerWidth, window.innerHeight);
renderer1.domElement.id = 'dodecahedron-canvas';
const dodecahedronBg1 = document.getElementById('dodecahedron-bg');
if (dodecahedronBg1) {
    renderer1.domElement.style.position = 'absolute';
    renderer1.domElement.style.top = '-100px';
    renderer1.domElement.style.left = '500px';
    renderer1.domElement.style.width = '100%';
    renderer1.domElement.style.height = '100%';
    renderer1.domElement.style.zIndex = '0';
    renderer1.domElement.style.pointerEvents = 'none';
    dodecahedronBg1.appendChild(renderer1.domElement);
}
const size1 = 6; // Smaller size for a smaller hole
const geometry1 = new THREE.DodecahedronGeometry(size1);
const edges1 = new THREE.EdgesGeometry(geometry1);
const lineMaterial1 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.7
});
const line1 = new THREE.LineSegments(edges1, lineMaterial1);
scene1.add(line1);

// dodecahedron 2
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// dodecahedron2 
camera2.position.z = 10;
const renderer2 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer2.setClearColor(0x000000, 0); // Set to fully transparent
renderer2.setSize(window.innerWidth, window.innerHeight);
renderer2.domElement.id = 'dodecahedron-canvas2';
const dodecahedronBg2 = document.getElementById('dodecahedron-bg2');
if (dodecahedronBg2) {
    renderer2.domElement.style.position = 'absolute';
    renderer2.domElement.style.top = '300px';
    renderer2.domElement.style.left = '100px';
    renderer2.domElement.style.width = '100%';
    renderer2.domElement.style.height = '100%';
    renderer2.domElement.style.zIndex = '0';
    renderer2.domElement.style.pointerEvents = 'none';
    dodecahedronBg2.appendChild(renderer2.domElement);
}
const size2 = 2;
const geometry2 = new THREE.DodecahedronGeometry(size2);
const edges2 = new THREE.EdgesGeometry(geometry2);
const lineMaterial2 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
});
const line2 = new THREE.LineSegments(edges2, lineMaterial2);
scene2.add(line2);

// dodecahedron 3
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera3.position.z = 10;
const renderer3 = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer3.setClearColor(0x000000, 0); // Set to fully transparent
renderer3.setSize(window.innerWidth, window.innerHeight);
renderer3.domElement.id = 'dodecahedron-canvas3';
const dodecahedronBg3 = document.getElementById('dodecahedron-bg3');
if (dodecahedronBg3) {
    renderer3.domElement.style.position = 'absolute';
    renderer3.domElement.style.top = '-280px'; // Move to top
    renderer3.domElement.style.left = '-370px'; // Move to left
    renderer3.domElement.style.width = '100%'; // Fixed size for visibility
    renderer3.domElement.style.height = '100%';
    renderer3.domElement.style.zIndex = '1'; // Above the others if needed
    renderer3.domElement.style.pointerEvents = 'none';
    dodecahedronBg3.appendChild(renderer3.domElement);
}
const size3 = 4; // Smaller size for better fit
const geometry3 = new THREE.DodecahedronGeometry(size3);
const edges3 = new THREE.EdgesGeometry(geometry3);
const lineMaterial3 = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.6
});
const line3 = new THREE.LineSegments(edges3, lineMaterial3);
scene3.add(line3);

// Animation loops
function animate1() {
    requestAnimationFrame(animate1);
    line1.rotation.x += 0.001;
    line1.rotation.y += 0.001;
    renderer1.render(scene1, camera1);
}
function animate2() {
    requestAnimationFrame(animate2);
    line2.rotation.x -= 0.001;
    line2.rotation.y -= 0.001;
    renderer2.render(scene2, camera2);
}
function animate3() {
    requestAnimationFrame(animate3);
    line3.rotation.x += 0.001;
    line3.rotation.y -= 0.001;
    renderer3.render(scene3, camera3);
}
animate1();
animate2();
animate3();

// Responsive resize
window.addEventListener('resize', () => {
    camera1.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
    renderer1.setSize(window.innerWidth, window.innerHeight);
    camera2.aspect = window.innerWidth / window.innerHeight;
    camera2.updateProjectionMatrix();
    renderer2.setSize(window.innerWidth, window.innerHeight);
    camera3.aspect = window.innerWidth / window.innerHeight;
    camera3.updateProjectionMatrix();
    renderer3.setSize(window.innerWidth, window.innerHeight);
});

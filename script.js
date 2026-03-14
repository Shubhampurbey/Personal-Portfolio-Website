// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');


// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
});


// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
link.addEventListener('click', () => {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
});
});


// Active link on scroll
window.addEventListener('scroll', () => {

let current = '';

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
current = section.getAttribute('id');
}

});

navLinks.forEach(link => {

link.classList.remove('active');

if (link.getAttribute('href').substring(1) === current) {
link.classList.add('active');
}

});

});



// 3D Background with Three.js
function initThreeJSBackground() {

const canvas = document.getElementById('bg-canvas');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas: canvas,
antialias: true,
alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

const particlesGeometry = new THREE.BufferGeometry();

const particlesCount = 2000;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
posArray[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute(
'position',
new THREE.BufferAttribute(posArray, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
size: 0.02,
color: 0x64ffda
});

const particlesMesh = new THREE.Points(
particlesGeometry,
particlesMaterial
);

scene.add(particlesMesh);

camera.position.z = 5;

function animate() {

requestAnimationFrame(animate);

particlesMesh.rotation.x += 0.0005;
particlesMesh.rotation.y += 0.0005;

renderer.render(scene, camera);

}

animate();

}

window.addEventListener('load', initThreeJSBackground);



// Scroll Reveal Animation
function initScrollReveal() {

const revealElements = document.querySelectorAll(
'.project-card, .timeline-item, .skill-item'
);

const scrollReveal = () => {

const windowHeight = window.innerHeight;
const revealPoint = 150;

revealElements.forEach(element => {

const elementTop = element.getBoundingClientRect().top;

if (elementTop < windowHeight - revealPoint) {
element.classList.add('revealed');
}

});

};

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);

}

initScrollReveal();



// EMAILJS CONTACT FORM

emailjs.init("mNnDX6CUcyOqgLGRC");

document
.getElementById("contact-form")
.addEventListener("submit", function (e) {

e.preventDefault();

emailjs
.sendForm(
"service_dz2l7gh",
"template_hjq5kza",
this
)

.then(() => {

document.getElementById("form-msg").innerHTML =
"Message sent successfully!";

document.getElementById("contact-form").reset();

})

.catch((error) => {

document.getElementById("form-msg").innerHTML =
"Failed to send message";

console.log("EmailJS Error:", error);

});

});

// Typing animation

const typingText = [
"Aspiring Data Scientist",
"Aspiring Data Analyst",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === typingText.length){
count = 0;
}

currentText = typingText[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type, 1200);
}else{
setTimeout(type, 80);
}

})();

// Scroll reveal animation

const reveals = document.querySelectorAll(".section");

window.addEventListener("scroll", reveal);

function reveal(){

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 120;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("active");
}

}

}

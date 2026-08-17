// ===============================
// Typing Effect
// ===============================

const text = "Front-End Web Developer";
let index = 0;

function typingEffect() {
    const typingElement = document.getElementById("typing");

    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;

        setTimeout(typingEffect, 100);
    }
}

window.addEventListener("load", typingEffect);


// ===============================
// Dark / Light Mode
// ===============================

const toggle = document.getElementById("theme-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggle.innerHTML = "☀️";
        } else {
            toggle.innerHTML = "🌙";
        }

    });
}


// ===============================
// Mobile Navbar
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


// ===============================
// Close Mobile Menu
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been sent.");

        contactForm.reset();

    });

}
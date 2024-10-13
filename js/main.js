// Smooth Scrolling Functionality for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//JavaScript to Toggle the Mobile Menu 
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const menuLinks = document.querySelectorAll('#mobile-menu a');

// Toggle the mobile menu and icons
menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden'); // Show/hide menu
    menuIcon.classList.toggle('hidden');   // Show/hide menu icon
    closeIcon.classList.toggle('hidden');  // Show/hide close icon
});

// Add click effect for the yellow color
menuToggle.addEventListener('mousedown', function () {
    menuToggle.classList.add('bg-yellow-500'); // Add yellow background on click
});

menuToggle.addEventListener('mouseup', function () {
    setTimeout(() => menuToggle.classList.remove('bg-yellow-500'), 150); // Remove yellow after click
});

// Close the mobile menu when a menu link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');  // Hide menu
        menuIcon.classList.remove('hidden'); // Show menu icon
        closeIcon.classList.add('hidden');   // Hide close icon
    });
});

// Fade-In Effect on Scroll
window.addEventListener('scroll', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add('opacity-100');
        } else {
            element.classList.remove('opacity-100');
        }
    });
});

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('hover:transform', 'hover:scale-105', 'hover:bg-gray-700');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('hover:transform', 'hover:scale-105', 'hover:bg-gray-700');
    });
});

// Contact Form 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
    const emailInput = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const emailValue = emailInput.value;

        // Validate email format
        if (!emailPattern.test(emailValue)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        // Send form data via AJAX
        const formData = new FormData(form);

        fetch("https://formspree.io/f/mgveevpo", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                responseMessage.innerHTML = "Thank you for your message! I'll get back to you soon.";
                form.reset(); // Clear the form fields after successful submission
            } else {
                responseMessage.innerHTML = "Oops! There was a problem submitting your form.";
            }
        }).catch(function (error) {
            responseMessage.innerHTML = "Oops! There was a problem submitting your form.";
        });
    });
});


// scripts.js
// Note: We removed 'DOMContentLoaded' because this script is loaded 
// dynamically after the page structure is already ready.

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Safety check: ensure elements exist before running logic
if (hamburger && navMenu) {

    // Toggle hamburger menu and nav menu visibility
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); 
        const isOpen = hamburger.classList.toggle('open');
        navMenu.classList.toggle('show', isOpen);
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Only prevent default if the target exists on this page
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header
                    behavior: 'smooth'
                });
                
                // Close the hamburger menu after clicking a link (for mobile view)
                hamburger.classList.remove('open');
                navMenu.classList.remove('show');
            }
        });
    });

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target) && navMenu.classList.contains('show')) {
            hamburger.classList.remove('open');
            navMenu.classList.remove('show');
        }
    });

    // Prevent closing the menu when clicking inside the menu
    navMenu.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
}
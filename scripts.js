document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle hamburger menu and nav menu visibility
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from propagating to the document click listener
        const isOpen = hamburger.classList.toggle('open');
        navMenu.classList.toggle('show', isOpen);
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header
                    behavior: 'smooth'
                });
            }

            // Close the hamburger menu after clicking a link (for mobile view)
            hamburger.classList.remove('open');
            navMenu.classList.remove('show');
        });
    });

    // Close menu when clicking outside on mobile (and stop propagation inside the menu)
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target) && navMenu.classList.contains('show')) {
            hamburger.classList.remove('open');
            navMenu.classList.remove('show');
        }
    });

    // Prevent closing the menu when clicking inside the menu or hamburger button
    navMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from propagating to the document click listener
    });
});
    // Close menu when clicking outside on mobile (and stop propagation inside the menu)
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target) && navMenu.classList.contains('show')) {
            hamburger.classList.remove('open');
            navMenu.classList.remove('show');
        }
    });

    // Prevent closing the menu when clicking inside the menu or hamburger button
    navMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from propagating to the document click listener
    });
});

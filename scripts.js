// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page is fully loaded and DOM is ready.');

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#007BFF';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });

    console.log('Interactive features are set up.');
});

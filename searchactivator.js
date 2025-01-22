// JavaScript to handle opening and closing the search window
const searchActivator = document.getElementById('searchActivator');
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const headerLeft = document.querySelector('.header-left'); // Use querySelector for classes
const searchContainer = document.querySelector('.search-container'); // Use querySelector for classes
const hamburgerMenu = document.querySelector('.hamburger'); // Hamburger menu selector

searchActivator.addEventListener('click', () => {
    // Show the search bar and adjust layout
    searchBar.style.display = 'block'; // Make the search bar visible
    headerLeft.style.display = 'none'; // Hide the logo and title (optional)
	searchContainer.style.position = 'relative';
	hamburgerMenu.style.position = 'relative';
	
});

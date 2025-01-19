// Extract the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query'); // Get the query string

// DOM elements
const searchBar = document.getElementById('search-bar');
const results = document.getElementById('results');

// Placeholder for search data
let pages = [];

async function loadSearchData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Lumivair/lumivair.github.io/refs/heads/main/pages.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        pages = data;
        if (query) {
            searchBar.value = query;
            performSearch(query);
        }
    } catch (error) {
        console.error('Error loading search data:', error);
        results.innerHTML = `<p>Failed to load search data: ${error.message}</p>`;
    }
}

// Perform the search
function performSearch(query) {
    results.innerHTML = ""; // Clear previous results

    const lowerCaseQuery = query.toLowerCase();

    pages.forEach(page => {
        if (page.title.toLowerCase().includes(lowerCaseQuery) || page.description.toLowerCase().includes(lowerCaseQuery)) {
            const result = document.createElement('div');
            result.className = 'result';
            result.innerHTML = `
                <a href="${page.url}"><strong>${page.title}</strong></a>
                <p>${page.description}</p>
            `;
            results.appendChild(result);
        }
    });

    if (results.innerHTML === "") {
        results.innerHTML = "<p>No results found.</p>";
    }
}

// If there's a query, populate the search box and perform the search
if (query) {
    searchBar.value = query; // Populate the search box
    loadSearchData(); // Load the search data and perform the search
} else {
    loadSearchData(); // Load the data if no query is present
}

// Add an event listener to handle manual searches
searchBar.addEventListener('input', () => {
    const query = searchBar.value;
    performSearch(query);
});

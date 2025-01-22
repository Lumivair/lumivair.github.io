        // JavaScript to handle opening and closing the search window
        const searchActivator = document.getElementById('searchActivator');
        const searchBar = document.getElementById('search-bar');

        searchActivator.addEventListener('click', () => {
            searchBar.style.display = 'block'; // Show the search window
			efwfwf.style.display = 'none'; // Show the search window
        });

        function performSearch() {
            const query = document.getElementById('searchInput').value;
            alert(`Searching for: ${query}`); // Placeholder for the search logic
            searchBar.style.display = 'none'; // Hide the search window after search
        }
  

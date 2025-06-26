// Functionality for the search bar
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.Search-input');
    const searchIcon = document.querySelector('.search-icon');

    searchIcon.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            // For demonstration, we'll just log the search query
            alert(`Searching for: ${query}`);
            // Here you could redirect to a search results page or implement search logic
        } else {
            alert("Please enter a search term.");
        }
    });

    // Optional: Allow 'Enter' key to trigger search
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchIcon.click(); // Trigger the search icon click event
        }
    });
});

// Functionality for the "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "Back to Top";
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none'; // Initially hidden

// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll smoothly back to the top when the button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Hover effect for product boxes
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)'; // Slightly enlarge the box
        this.style.transition = 'transform 0.2s'; // Smooth transition
    });

    box.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)'; // Reset size
    });
});

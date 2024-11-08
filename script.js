// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

// Optional: Dark mode toggle functionality
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
};

// Event listener for dark mode button (if implemented)
document.querySelector('#dark-mode-button')?.addEventListener('click', toggleDarkMode);

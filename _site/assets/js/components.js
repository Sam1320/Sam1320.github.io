// Simple component system for modular HTML elements

// Header component
function loadHeader() {
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = `
            <nav>
                <ul class="nav-list">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <!-- <li class="nav-item"><a class="nav-link" href="resume.html">Resume</a></li> -->
                </ul>
            </nav>
            <h1>Sam Rodríguez</h1>
        `;
    }
}

// Footer component
function loadFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <p>&copy; 2025 Sam Rodriguez</p>
        `;
    }
}

// Load all components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
}); 
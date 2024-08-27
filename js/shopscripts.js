
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
// Smooth scrolling for footer links
document.querySelectorAll('footer a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').charAt(0) === '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

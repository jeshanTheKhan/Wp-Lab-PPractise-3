// Smooth Scrolling for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder JS for form submission (can be expanded as needed)
document.getElementById('contact').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
});

document.getElementById('subscribe').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
});

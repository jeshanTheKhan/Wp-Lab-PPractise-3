$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});
document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
    } else {
        // Submit the form or do something else
        alert('Form submitted successfully!');
        // You can remove the next line to actually submit the form
        event.target.submit();
    }
});

function updateQuantity(button, change) {
    var quantityElement = button.parentElement.querySelector('.quantity-number');
    var quantity = parseInt(quantityElement.textContent);
    quantity += change;
    if (quantity < 1) quantity = 1; // Minimum quantity is 1
    quantityElement.textContent = quantity;
}

function deleteProduct(button) {
    var row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

// JavaScript to toggle the menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
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

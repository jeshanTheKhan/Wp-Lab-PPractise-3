
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

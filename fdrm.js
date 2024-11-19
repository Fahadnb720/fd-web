
document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.cards');
    cards.forEach(cards => {4
        cards.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';  // Slightly enlarge the card
            this.style.transition = 'transform 0.3s ease-in-out';  // Smooth transition
        });

        cards.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';  // Reset the scale
            this.style.boxShadow = 'none';  // Remove shadow
        });
    });
});
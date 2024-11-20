const card = document.getElementsByClassName("cards")
    const cards= card.addEventListener('mouseOver' , function() {
    card.style.transform = 'scale(1.05)'; 
    card.style.transition = 'transform 0.3s ease-in-out'; 

    cards.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';  // Reset the scale
        this.style.boxShadow = 'none';  
    });// Remove shadow
});
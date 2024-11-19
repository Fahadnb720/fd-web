const card = document.getElementsByClassName("cards")
const cards= card.addEventListener('mouseOver' , () => {
    card.style.transform = 'scale(1.05)'; 
    card.style.transition = 'transform 0.3s ease-in-out'; 
})
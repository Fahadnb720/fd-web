
document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.cards');
    cards.forEach(cards => {
        cards.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';  
            this.style.transition = 'transform 0.3s ease-in-out';  
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)'
        });

        cards.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';  
            this.style.boxShadow = 'none';  
        });
    });
const loginLink=document.querySelector('.menu-button,li:nth-child(1)');
    loginLink.addEventListener('click', function(event){
        alert('WELCOME TO THE NEXT PAGE!!');

const anime=document.querySelector('.menu-button,li:nth-child(3)');
    anime.forEach(anime =>{
        anime.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)'; 
            this.style.transition = 'transform 0.3s ease-in-out';  
            this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)'
        });

        cards.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; 
            this.style.boxShadow = 'none';  
        });
    });
    });    
});    

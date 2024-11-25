
document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.cards');
    cards.forEach(cards => {
        cards.addEventListener('mouseover', function()) {
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
    }); 
    
       
    
window.onload = function () {
    // Get the elements
    const heroHeading = document.querySelector('.IR-large');

    // Initial styles: Make sure these elements are off-screen or invisible initially
    heroHeading.style.position = "relative";
    heroHeading.style.left = "-500px"; // Start off-screen
    heroHeading.style.opacity = "0";   // Initially hidden
    
    
    // Animation for hero heading: Slide in from the left and fade in
    setTimeout(() => {
        heroHeading.style.transition = "left 1s ease-out, opacity 1s ease-out"; // Set transition for smooth animation
        heroHeading.style.left = "0px"; // Move to original position
        heroHeading.style.opacity = "1"; // Fade in
    }, 100); // Slight delay to ensure it starts after page load

    // Animation for hero description: Fade in
    
};


// Explanation of JavaScript:
// window.onload: Ensures that the animations will start after the page content is fully loaded.

// setTimeout: Used to control the timing of when animations start. For example, we first animate the .hero-heading, and after a delay, animate the .hero-desc.

// style.transition: This JavaScript property is used to add smooth transitions to the style changes. In this case, we use it to transition the left position and opacity of the elements.

// style.left and style.opacity: These properties are modified by JavaScript to animate the elements. We set left for sliding in and opacity for fading in.


window.addEventListener('load', function() {
    const fadeTexts = document.querySelectorAll('.fadeText');  // Get all elements with the 'fadeText' class
    
    fadeTexts.forEach(function(fadeText) {
        setTimeout(function() {
            fadeText.style.opacity = 1;  // Fade in
        }, 1000);  // Delay of 1 second before fading in
    });
    
});

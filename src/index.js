// JS Goes here - ES6 supported

import "./css/main.scss";

document.addEventListener('DOMContentLoaded', () => {
        // Set the background gradient
        document.body.style.backgroundImage = `
        radial-gradient(circle at top left, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0) 70%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15), transparent),
        radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.15), transparent)
    `;

    // Set the shadow properties
    const shadowX = -5; // Shadow offset to the left
    const shadowY = 5;  // Shadow offset downwards
    const blur = 5;    // Shadow blur radius
    const shadowColor = 'rgba(0, 0, 0, 0.6)'; // Shadow color

    // Apply shadow to the h1 element
    let h1Element = document.getElementById('dynamic-title');
    if (h1Element) {
        h1Element.style.textShadow = `${shadowX}px ${shadowY}px ${blur}px ${shadowColor}`;
    }

    // Apply shadow to all elements with the class 'menuimg'
    let menuImages = document.querySelectorAll('.menuimg');
    menuImages.forEach(function(img) {
        img.style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${blur}px ${shadowColor})`;
    });
    
    const homepageContent = document.getElementById('frames-wall');

    // Function to animate out the homepage content and then navigate
    function animateOutAndNavigate(url) {
        console.log("Navigating to:", url);
        homepageContent.classList.add('animate-out'); // Start the animation

        // Wait for the animation to complete before navigating
        homepageContent.addEventListener('animationend', () => {
            // homepageContent.classList.add('hidden'); // Hide the content
            window.location.href = url; // Navigate to the clicked section
        }, { once: true });
    }

    // Attach event listeners to each menu item link
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent immediate navigation
            console.log("Link element:", link); // Log the link element
            const url = link.getAttribute('href'); // Get the URL from the clicked link
            console.log("Link clicked:", url); // Debugging log
            animateOutAndNavigate(url); // Animate out and navigate
        });
    });
});



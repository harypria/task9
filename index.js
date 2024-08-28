// index.js
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('my image');

    // Add mouseover event listener to hide the image
    image.addEventListener('mouseover', function() {
        image.style.opacity = '0';  // Fade out the image
    });

    // Add mouseout event listener to show the image
    image.addEventListener('mouseout', function() {
        image.style.opacity = '1';  // Fade in the image
    });
});

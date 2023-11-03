/*header color*/

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 250) { // Adjust the scroll position where the color change should happen
            header.style.backgroundImage = 'linear-gradient(to bottom, rgba(13, 34, 55, 1) 0%, rgba(13, 34, 55, 0.1) 100%)'; // Change to your desired gradient
        } else {
            header.style.backgroundImage = 'none'; // Reset to no background image
        }
    });
});

/*header color*/





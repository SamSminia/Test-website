function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var closeButton = document.getElementById("closeButton");
    
    if (typeof navbar.style.right === 'undefined' || navbar.style.right === "") {
        navbar.style.right = "-100%";
    }

    if (navbar.style.right === "-100%") {
        navbar.style.right = "0";
        closeButton.style.visibility = "visible"; // Make the close button visible
    } else {
        navbar.style.right = "-100%";
        closeButton.style.visibility = "hidden"; // Hide the close button
    }
}

// Initialize the menu and close button when the window loads
window.onload = function() {
    var navbar = document.getElementById("navbar");
    var closeButton = document.getElementById("closeButton");
    navbar.style.right = "-100%";
    closeButton.style.visibility = "hidden"; // The close button should be hidden initially
};
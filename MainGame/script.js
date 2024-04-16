// script.js

var canClick = true; // Variable to track if the button can be clicked

// Function to enable the button after a delay
function enableButton() {
    canClick = true;
    document.getElementById("clickButton").removeAttribute("disabled", false);
}

// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Retrieve click count from localStorage if it exists
    var clickCount = localStorage.getItem("clickCount");
    if (!clickCount) {
        // Set initial click count if it doesn't exist
        clickCount = 0;
    } else {
        // Update click count display
        document.getElementById("clickCount").textContent = clickCount;
    }

    // Add click event listener to the button
    document.getElementById("clickButton").addEventListener("click", function() {
        if (canClick) {
            // Increment click count
            clickCount++;
            // Update click count display
            document.getElementById("clickCount").textContent = clickCount;
            // Store click count in localStorage
            localStorage.setItem("clickCount", clickCount);
            
            // Disable the button and set canClick to false
            document.getElementById("clickButton").addAttribute("disabled");
            canClick = false;
            
            // Enable the button after 2 seconds
            setTimeout(enableButton, 2000);
        }
    });
} else {
    // Display an error message if localStorage is not supported
    document.getElementById("clickCount").textContent = "Sorry, your browser does not support web storage...";
}

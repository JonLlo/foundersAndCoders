// Use getElementById to select the button
const fontChangeButton = document.getElementById('fontChangeButton');

// Array of font-family and background-image combinations
const combinations = [
    {
        color: 'black',  // Red
        background: 'url("images/woodtile.jpg")'
    },
    {
        color: '#817036',  // Green
        background: 'url("images/pier.jpeg")'
    },
    {
        color: 'black',  // Blue
        background: 'url("images/rain.jpg")'
    },
    {
        color: 'brown',  // Yellow
        background: 'url("images/grass.jpg")'
    }
];

// Index to keep track of the current combination
let currentCombination = 0;

// Function to apply the current combination of font and background
function applyCombination() {
    document.body.style.fontFamily = combinations[currentCombination].font;
    document.body.style.backgroundImage = combinations[currentCombination].background;
    document.body.style.backgroundSize = 'cover'; // Ensures the image covers the entire viewport
    document.body.style.backgroundRepeat = 'y-repeat'; // Prevent the background image from repeating
    document.body.style.backgroundPosition = 'center'; // Center the image
    
    // Apply the text color to specific elements like h1, p, etc.
    document.body.style.color = combinations[currentCombination].color;

    // For elements like h1, p (in case you want more control over color)
    const textElements = document.querySelectorAll('h1, p');
    textElements.forEach(element => {
        element.style.color = combinations[currentCombination].color;
    });
}

// Use the onclick property to handle the click event
fontChangeButton.onclick = () => {
    // Update the index to the next combination (looping back to 0 after 3)
    currentCombination = (currentCombination + 1) % combinations.length;
    
    // Apply the new combination
    applyCombination();
};

// Set the initial background and font when the page loads
window.onload = () => {
    applyCombination();
};



const languageChangeButton = document.getElementById('languageChangeButton');

// Function to toggle the language
languageChangeButton.onclick = () => {
    // Toggle the display of English and Spanish text
    const englishText = document.querySelectorAll('.text-english');
    const spanishText = document.querySelectorAll('.text-spanish');

    englishText.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    spanishText.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });
};
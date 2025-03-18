
// Function to switch the page to Spanish
function switchToSpanish() {
    hiddenContentDJ.style.display = 'none';
    hiddenContent.style.display = 'none';

    isSpanish = true;

    // Change button text to "Cambiar a inglés"
    const button = document.getElementById("change-to-spanish");
    button.textContent = "Switch To English"; 

    // Change all text with 'data-en' and 'data-es' attributes to Spanish
    const elements = document.querySelectorAll('[data-en], [data-es]');
    elements.forEach(element => {
        // If Spanish is available, set text to Spanish (data-es)
        if (element.getAttribute('data-es')) {
            element.textContent = element.getAttribute('data-es');
        }
    });

    // Change all image sources from 'english' to 'spanish'
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.src.includes('english')) {
            img.src = img.src.replace('english', 'spanish');
        }
    });

    // Save the language state in localStorage
    localStorage.setItem("language", "spanish");
}

// Function to switch the page back to English
function switchToEnglish() {
    hiddenContentDJ.style.display = 'none';
    hiddenContent.style.display = 'none';
    isSpanish = false;

    // Change button text to "Cambiar a español"
    const button = document.getElementById("change-to-spanish");
    button.textContent = "Switch to Spanish";

    // Change all text with 'data-en' and 'data-es' attributes back to English
    const elements = document.querySelectorAll('[data-en], [data-es]');
    elements.forEach(element => {
        // If English is available, set text to English (data-en)
        if (element.getAttribute('data-en')) {
            element.textContent = element.getAttribute('data-en');
        }
    });

    // Change all image sources from 'spanish' to 'english'
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.src.includes('spanish')) {
            img.src = img.src.replace('spanish', 'english');
        }
    });

    // Save the language state in localStorage
    localStorage.setItem("language", "english");
}


// Set the language based on the stored state in localStorage when the page is loaded
window.addEventListener('load', () => {
    switchToEnglish();


    // Add click listener to toggle language
    document.getElementById("change-to-spanish").addEventListener("click", function () {
        const currentLanguage = localStorage.getItem("language");
        if (currentLanguage === "english") {
            switchToSpanish(); // Switch to Spanish if it's currently English
        } else {
            switchToEnglish(); // Switch back to English if it's currently Spanish
        }
    });
});

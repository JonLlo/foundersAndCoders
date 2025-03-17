// Function to switch the page to Spanish
function switchToSpanish() {
    // Change button text to "Cambiar a inglés"
    const button = document.getElementById("change-to-spanish");
    button.textContent = "Switch To English"; 

    // Change various texts to Spanish
    document.querySelector(".intro-two p").textContent = "¡Resuelve los acertijos a continuación para encontrar información sobre mí!";
    document.querySelector(".who-auto p").textContent = "¿QUIÉN SOY?";
    document.getElementById("autofill").textContent = "Haz clic para hacer trampa";

    // Change timeline headings to Spanish
    document.querySelectorAll(".timeline__title")[0].textContent = "Nací";
    document.querySelectorAll(".timeline__title")[1].textContent = "Escuela";
    document.querySelectorAll(".timeline__title")[2].textContent = "Año sabático";
    document.querySelectorAll(".timeline__title")[3].textContent = "Universidad";
    document.querySelectorAll(".timeline__title")[4].textContent = "Terminé la universidad";
    document.querySelectorAll(".timeline__title")[5].textContent = "Marketing digital y eventos";
    document.querySelectorAll(".timeline__title")[6].textContent = "Cambio de carrera";
    document.querySelectorAll(".timeline__title")[7].textContent = "El futuro...";

    // Change puzzle pieces to their Spanish equivalents by updating the `src` attribute
    const puzzlePieces = document.querySelectorAll('.puzzle-piece');
    puzzlePieces.forEach(piece => {
        const spanishSrc = piece.src.replace('english', 'spanish'); // Replace 'english' with 'spanish' in the src
        piece.src = spanishSrc; // Update the src to point to the Spanish version
    });

    // Save the language state in localStorage
    localStorage.setItem("language", "spanish");
}

// Function to switch the page back to English
function switchToEnglish() {
    // Change button text to "Cambiar a español"
    const button = document.getElementById("change-to-spanish");
    button.textContent = "Switch to Spanish";

    // Change various texts back to English
    document.querySelector(".intro-two p").textContent = "Solve the puzzles below to uncover information about me!";
    document.querySelector(".intro-two p:nth-of-type(2)").textContent = "Drag the pieces on the right to the grid on the left!";
    document.querySelector(".who-auto p").textContent = "WHO AM I?";
    document.getElementById("autofill").textContent = "Click to cheat";

    // Change timeline headings back to English
    document.querySelectorAll(".timeline__title")[0].textContent = "I was born";
    document.querySelectorAll(".timeline__title")[1].textContent = "School";
    document.querySelectorAll(".timeline__title")[2].textContent = "Gap year";
    document.querySelectorAll(".timeline__title")[3].textContent = "University";
    document.querySelectorAll(".timeline__title")[4].textContent = "Graduated from university";
    document.querySelectorAll(".timeline__title")[5].textContent = "Digital marketing & events";
    document.querySelectorAll(".timeline__title")[6].textContent = "Career change";
    document.querySelectorAll(".timeline__title")[7].textContent = "The future...";

    // Change puzzle pieces back to their English equivalents by updating the `src` attribute
    const puzzlePieces = document.querySelectorAll('.puzzle-piece');
    puzzlePieces.forEach(piece => {
        const englishSrc = piece.src.replace('spanish', 'english'); // Replace 'spanish' with 'english' in the src
        piece.src = englishSrc; // Update the src to point to the English version
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

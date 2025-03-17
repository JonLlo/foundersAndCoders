const themeChange = document.getElementById('theme-change');
const themes = ['lightblue', 'lightyellow', 'darkred']; // Background colors
const buttonThemes = ['#4CAF50', '#FFA500', 'darkblue']; // Button colors (green, orange, dark red)
let currentTheme = 0; // Track the current theme

// Find and mark originally white text
document.querySelectorAll('*').forEach(el => {
    const computedColor = window.getComputedStyle(el).color;
    if (computedColor === 'rgb(255, 255, 255)') { // White text
        el.classList.add('original-white');
    }
});

themeChange.addEventListener('click', () => {
    currentTheme = (currentTheme + 1) % themes.length; // Cycle through themes
    document.body.style.backgroundColor = themes[currentTheme];

    // Change navbar and scroll elements
    document.querySelectorAll('.navbar, .scroll').forEach(el => {
        el.style.backgroundColor = themes[currentTheme];
    });

    // Change all buttons (including the theme change button itself)
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = buttonThemes[currentTheme];
    });

    // Update originally white text: Black on yellow, White otherwise
    document.querySelectorAll('.original-white').forEach(el => {
        el.style.color = (currentTheme === 1) ? 'black' : 'white';
    });

    // Adjust body text color for readability
    document.body.style.color = currentTheme === 2 ? 'white' : 'black'; // White on dark red, black otherwise
});




document.getElementById("change-to-spanish").addEventListener("click", function () {
    // Change button text
    this.textContent = "Cambiar a inglés"; 

    // Change various texts to Spanish
    document.querySelector(".intro-two p").textContent = "¡Resuelve los acertijos a continuación para encontrar información sobre mí!";
    document.querySelector(".intro-two p:nth-of-type(2)").textContent = "¡Arrastra las piezas de la derecha a la cuadrícula de la izquierda!";
    document.querySelector(".who-auto p").textContent = "¿QUIÉN SOY?";
    document.getElementById("autofill").textContent = "Haz clic para hacer trampa";

    // Change timeline headings
    document.querySelectorAll(".timeline__title")[0].textContent = "Nací";
    document.querySelectorAll(".timeline__title")[1].textContent = "Escuela";
    document.querySelectorAll(".timeline__title")[2].textContent = "Año sabático";
    document.querySelectorAll(".timeline__title")[3].textContent = "Universidad";
    document.querySelectorAll(".timeline__title")[4].textContent = "Terminé la universidad";
    document.querySelectorAll(".timeline__title")[5].textContent = "Marketing digital y eventos";
    document.querySelectorAll(".timeline__title")[6].textContent = "Cambio de carrera";
    document.querySelectorAll(".timeline__title")[7].textContent = "El futuro...";

    // Add logic to toggle back to English
    this.addEventListener("click", function () {
        location.reload(); // Reloads the page to reset to English
    });
});











const pieces = document.querySelectorAll('.puzzle-piece');
const dropZones = document.querySelectorAll('.drop-zone');
const checkButton = document.getElementById('check-button');
const spareZone = document.getElementById('spare-zone'); 
const autoFill = document.getElementById('autofill'); 








pieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.id);
    event.dataTransfer.setData('elementId', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const pieceElementId = event.dataTransfer.getData('elementId');
    const piece = document.getElementById(pieceElementId);

    // Ensure event.target is actually the drop zone
    let dropZone = event.target;
    if (!dropZone.classList.contains('drop-zone')) {
        dropZone = dropZone.closest('.drop-zone'); // Get the closest drop-zone parent
    }

    if (!dropZone) return; // If no valid drop zone is found, exit

    // Now check if the drop zone already has a piece inside
    if (dropZone.children.length === 0) {
        dropZone.appendChild(piece);
        checkCompletion()
        
    } 
    
}


function checkCompletion() {
    const allFilled = [...dropZones].filter(zone => zone !== spareZone).every(zone => zone.children.length > 0);
    if (allFilled) {
        spareZone.style.display = 'block'; // Unhide the spare zone once all pieces are placed
        //autoFill.style.display = 'block'; // Unhide the spare zone once all pieces are placed

    }
}




// Event listener for autofill button to place all pieces in the correct order
autoFill.addEventListener('click', autoFillGrid);

function autoFillGrid() {
    // Clear all drop zones first

    // Correct order of pieces, you can adjust these IDs based on the correct order
    const correctOrder = ['piece1', 'piece2', 'piece3', 'piece4', 'piece5', 'piece6']; // Replace with your actual piece IDs

    // Loop over the correct order of pieces and place them in the respective drop zones
    correctOrder.forEach((pieceId, index) => {
        const piece = document.getElementById(pieceId);
        const dropZone = dropZones[index]; // Assuming the drop zones are in correct order

        // Place the piece inside the drop zone
        if (dropZone) {
            dropZone.appendChild(piece);
        }
    });

    checkCompletion(); // After autofill, check if the puzzle is completed
}




const buttonDis = document.getElementById('dissertation');

buttonDis.addEventListener('click', function() {
    // Open the dissertation PDF in a new tab
    window.open('dissertaion', '_blank');
});





// Get references to the button and the hidden content
const button = document.getElementById('revealButton');
const hiddenContent = document.getElementById('hiddenContent');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Toggle the display of hidden content
    if (hiddenContent.style.display === 'block') {
        hiddenContent.style.display = 'none'; // Hide it
        button.innerText = 'Click here to reveal my favourite Maths Theorem'; // Change button text back
    } else {
        hiddenContent.style.display = 'block'; // Show it
        button.innerText = 'Hide Theorem'; // Change button text to 'Hide Theorem'
    }
});


// Get references to the button and the hidden content
const buttonDJ = document.getElementById('revealButton-dj');
const hiddenContentDJ = document.getElementById('hiddenContent-dj');
const audioPlayer = document.getElementById('audio-player');


// Add an event listener to the button
buttonDJ.addEventListener('click', function() {
    // Toggle the display of hidden content
    if (hiddenContentDJ.style.display === 'block') {
        hiddenContentDJ.style.display = 'none'; // Hide it
        buttonDJ.innerText = 'Click here to reveal one of my favourite songs that I liked to play at the bars at the time!'; // Change button text back
    } else {
        hiddenContentDJ.style.display = 'block'; // Show it
        buttonDJ.innerText = 'Hide Song'; // Change button text to 'Hide Theorem'
    }
});

const playButton = document.getElementById('play-button')
const fastForwardButton = document.getElementById('fast-forward-button');


    // Play the audio when th
   
    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.currentTime = 5;
            audioPlayer.play(); // Play the audio
            playButton.innerHTML = '⏸️'; // Change to pause button when playing
        } else {
            audioPlayer.pause(); // Pause the audio
            playButton.innerHTML = '▶️'; // Change to play button when paused
        }
    });

    fastForwardButton.addEventListener('click', function() {
        audioPlayer.currentTime += 10; // Fast forward by 10 seconds
    });



    document.getElementById('revealButton-photo').addEventListener('click', function() {
        var hiddenPhoto = document.getElementById('hiddenContent-photo');
        if (hiddenPhoto.style.display === 'block') {
            hiddenPhoto.style.display = 'none';
            this.innerText = 'Click here to reveal The Loonies DVD cover...';
        } else {
            hiddenPhoto.style.display = 'block';
            this.innerText = 'Hide Photo';
        }
    });


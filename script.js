const themeChange = document.getElementById('theme-change');
const themes = ['lightblue', 'lightyellow', 'rgb(63, 63, 63']; // Background colors
const buttonThemes = ['#025a5a', '#FFA500', '#121212']; // Button colors 
let currentTheme = 0; // Track the current theme

// Find and mark originally white text
document.querySelectorAll('*').forEach(el => {
    const computedColor = window.getComputedStyle(el).color;
    if (computedColor === 'rgb(255, 255, 255)') { // White text
        el.classList.add('original-white');
    }
});



themeChange.addEventListener('click', () => {
    // Cycle through themes
    currentTheme = (currentTheme + 1) % themes.length;

    // Remove styles and event listeners for theme 0
    if (currentTheme !== 0) {
        // Reset styles for buttons and remove event listeners when the theme is not 0
        document.querySelectorAll('.button-section button').forEach(button => {
            button.removeEventListener('mouseover', handleButtonHover);
            button.removeEventListener('mouseout', handleButtonMouseOut);
            button.removeEventListener('mousedown', handleButtonMouseDown);
            button.removeEventListener('mouseup', handleButtonMouseUp);
            button.style.backgroundColor = ''; // Reset background color
            button.style.transform = ''; // Reset transform
            button.style.boxShadow = ''; // Reset box shadow
        });
        // Same reset for other buttons
        document.querySelectorAll('.reveal-button').forEach(button => {
            button.removeEventListener('mouseover', handleButtonHover);
            button.removeEventListener('mouseout', handleButtonMouseOut);
            button.removeEventListener('mousedown', handleButtonMouseDown);
            button.removeEventListener('mouseup', handleButtonMouseUp);
            button.style.backgroundColor = '';
            button.style.transform = '';
            button.style.boxShadow = '';
        });
        document.querySelectorAll('.autofill, .autofill-2, .autofill-4').forEach(button => {
            button.removeEventListener('mouseover', handleButtonHoverAuto);
            button.removeEventListener('mouseout', handleButtonMouseOut);
            button.removeEventListener('mousedown', handleButtonMouseDownAuto);
            button.removeEventListener('mouseup', handleButtonMouseUp);
            button.style.backgroundColor = '';
            button.style.transform = '';
            button.style.boxShadow = '';
        });
        document.querySelectorAll('.autofill-3').forEach(button => {
            button.removeEventListener('mouseover', handleButtonHover);
            button.removeEventListener('mouseout', handleButtonMouseOut);
            button.removeEventListener('mousedown', handleButtonMouseDown);
            button.removeEventListener('mouseup', handleButtonMouseUp);
            button.style.backgroundColor = '';
            button.style.transform = '';
            button.style.boxShadow = '';
        });
    }

    // Apply styles when currentTheme is 0
    if (currentTheme === 0) {
        document.querySelectorAll('.button-section button').forEach(button => {
            button.addEventListener('mouseover', handleButtonHover);
            button.addEventListener('mouseout', handleButtonMouseOut);
            button.addEventListener('mousedown', handleButtonMouseDown);
            button.addEventListener('mouseup', handleButtonMouseUp);
        });

        document.querySelectorAll('.reveal-button').forEach(button => {
            button.addEventListener('mouseover', handleButtonHover);
            button.addEventListener('mouseout', handleButtonMouseOut);
            button.addEventListener('mousedown', handleButtonMouseDown);
            button.addEventListener('mouseup', handleButtonMouseUp);
        });

        document.querySelectorAll('.autofill, .autofill-2, .autofill-4').forEach(button => {
            button.addEventListener('mouseover', handleButtonHoverAuto);
            button.addEventListener('mouseout', handleButtonMouseOut);
            button.addEventListener('mousedown', handleButtonMouseDownAuto);
            button.addEventListener('mouseup', handleButtonMouseUp);
        });

        document.querySelectorAll('.autofill-3').forEach(button => {
            button.addEventListener('mouseover', handleButtonHover);
            button.addEventListener('mouseout', handleButtonMouseOut);
            button.addEventListener('mousedown', handleButtonMouseDown);
            button.addEventListener('mouseup', handleButtonMouseUp);
        });
    }

    // Change the body background color according to the theme
    document.body.style.backgroundColor = themes[currentTheme];

    // Change navbar and scroll elements background color
    document.querySelectorAll('.navbar, .scroll').forEach(el => {
        el.style.backgroundColor = themes[currentTheme];
    });

    // Change all buttons (including the theme change button itself)
    document.querySelectorAll('button').forEach(button => {
        button.style.backgroundColor = buttonThemes[currentTheme];
    });

    // Update the "thanks" text color based on the theme
    const thanks = document.getElementById('thanks');
    if (currentTheme === 1) {
        thanks.style.color = 'black'; // For lightblue background
    } else {
        thanks.style.color = 'white'; // For other backgrounds
    }

    // Update originally white text: Black on yellow, White otherwise
    document.querySelectorAll('.original-white').forEach(el => {
        if (currentTheme === 1) {
            el.style.color = 'black'; // For lightblue background
        } else {
            el.style.color = 'white'; // For other backgrounds
        }
    });

    // Update the name color for theme 2
    document.querySelectorAll('.nameJon').forEach(el => {
        if (currentTheme === 2) {
            el.style.color = 'white'; // For lightblue background
        } else {
            el.style.color = 'black'; // For other backgrounds
        }
    });

    // Update the toggle text color
    updateToggleTextColor();
});

// Handle hover event for buttons
function handleButtonHover(event) {
    event.target.style.backgroundColor = 'darkblue'; // Hover effect for lightblue theme
    event.target.style.transform = 'translateY(-0.5px)'; // Slight upward movement
    event.target.style.boxShadow = '0px 1.5px 3px rgba(0, 0, 0, 0.2)'; // Stronger shadow on hover
}

function handleButtonHoverAuto(event) {
    event.target.style.backgroundColor = 'darkblue'; // Hover effect for lightblue theme
    event.target.style.transform = 'translateY(-20.5px)'; // Slight upward movement
    event.target.style.boxShadow = '0px 1.5px 3px rgba(0, 0, 0, 0.2)'; // Stronger shadow on hover
}

// Handle mouse out event for buttons
function handleButtonMouseOut(event) {
    event.target.style.backgroundColor = buttonThemes[currentTheme]; // Reset to original button color
    event.target.style.transform = ''; // Reset transform
    event.target.style.boxShadow = ''; // Reset shadow
}

// Handle mouse down event for buttons
function handleButtonMouseDown(event) {
    event.target.style.backgroundColor = '#025a5a'; // Active effect for lightblue theme
    event.target.style.transform = 'translateY(0.25px)'; // Small inward movement on click
}

function handleButtonMouseDownAuto(event) {
    event.target.style.backgroundColor = '#025a5a'; // Active effect for lightblue theme
    event.target.style.transform = 'translateY(-20.75px)'; // Small inward movement on click
}

// Handle mouse up event for buttons
function handleButtonMouseUp(event) {
    event.target.style.backgroundColor = buttonThemes[currentTheme]; // Reset to original button color
    event.target.style.transform = ''; // Reset transform
}



// Function to update text color based on the background color
function updateToggleTextColor() {

    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;

    // Check if the background color is black
    if (backgroundColor === 'rgb(63, 63, 63)') {
        // 'rgb(0, 0, 0)' is black
        document.querySelectorAll('#toggle').forEach(el => {
            el.style.color = 'white'; // Set text color to white
        });
    } else {
        document.querySelectorAll('#toggle').forEach(el => {
            el.style.color = 'black'; // Set text color to black
        });
    }
}




const pieces = document.querySelectorAll('.puzzle-piece');
const dropZones = document.querySelectorAll('.drop-zone');
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
    const correctOrder = ['piece1', 'piece2', 'piece3', 'piece4', 'piece5', 'piece6'];

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
    window.open('files/jondis.pdf', '_blank');
});




// Get references to the button and the hidden content
const button = document.getElementById('revealButton');
const hiddenContent = document.getElementById('hiddenContent');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Toggle the display of hidden content
    if (hiddenContent.style.display === 'block') {
        hiddenContent.style.display = 'none'; // Hide it

        if (!isSpanish) {
            button.innerText = 'Click here to reveal my favourite Maths Theorem'; // Change button text to 'Hide Theorem'
        }
        if (isSpanish) {
            button.innerText = 'Haga clic aquí para descubrir mi teorema de matemáticas favorito'; // Change button text to 'Hide Theorem'
        }
    } else {
        hiddenContent.style.display = 'block'; // Show it
        if (!isSpanish) {
            button.innerText = 'Hide Theorem'; // Change button text to 'Hide Theorem'
        }
        if (isSpanish) {
            button.innerText = 'Teorema de Hide'; // Change button text to 'Hide Theorem'
        }
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

        if (!isSpanish) {
            buttonDJ.innerText = 'Click here to reveal one of my favourite songs that I liked to play at the bars at the time!'; // Change button text to 'Hide Theorem'
        }
        if (isSpanish) {
            buttonDJ.innerText = '¡Haga clic aquí para descubrir una de mis canciones favoritas que me gustaba tocar en los bares en esa época!'; // Change button text to 'Hide Theorem'
        }
    } else {
        hiddenContentDJ.style.display = 'block'; // Show it
        if (!isSpanish) {
            buttonDJ.innerText = 'Hide Song'; // Change button text to 'Hide Theorem'
        }
        if (isSpanish) {
            buttonDJ.innerText = '¡Ocultar canción'; // Change button text to 'Hide Theorem'
        }
    }
});

const playButton = document.getElementById('play-button')
const fastForwardButton = document.getElementById('fast-forward-button');




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

        // Toggle button text based on the isSpanish flag
        if (!isSpanish) {
            this.innerText = 'Click here to reveal The Loonies Final season DVD cover...'; // English text
        }
        if (isSpanish) {
            this.innerText = 'Haga clic aquí para revelar la portada del DVD de la temporada final de The Loonies...'; // Spanish text
        }
    } else {
        hiddenPhoto.style.display = 'block';

        // Change button text when content is revealed
        if (!isSpanish) {
            this.innerText = 'Hide Photo'; // English text
        }
        if (isSpanish) {
            this.innerText = '¡Ocultar foto!'; // Spanish text
        }
    }
});

document.getElementById('revealButton-photo-baby').addEventListener('click', function() {
    var hiddenPhoto = document.getElementById('hiddenContent-photo-baby');

    if (hiddenPhoto.style.display === 'block') {
        hiddenPhoto.style.display = 'none';

        // Toggle button text based on the isSpanish flag
        if (!isSpanish) {
            this.innerText = 'Click here to see a picture of me when I was small'; // English text
        }
        if (isSpanish) {
            this.innerText = 'Haga clic aquí para ver una foto mía cuando era pequeña.'; // Spanish text
        }
    } else {
        hiddenPhoto.style.display = 'block';


        // Change button text when content is revealed
        if (!isSpanish) {
            this.innerText = 'Hide Photo'; // English text
        }
        if (isSpanish) {
            this.innerText = '¡Ocultar foto!'; // Spanish text
        }
    }
});




// Get the elements
const me = document.getElementById('me');
const speechBubble = document.getElementById('speech-bubble');

// Show the speech bubble when mouse enters
me.addEventListener('mouseenter', () => {
    speechBubble.style.display = 'block'; // Make the speech bubble visible
    speechBubble.style.opacity = '1'; // Set opacity to 1 (make it visible)
});

// Hide the speech bubble when mouse leaves
me.addEventListener('mouseleave', () => {
    speechBubble.style.display = 'none'; // Hide the speech bubble
    speechBubble.style.opacity = '0'; // Set opacity back to 0 (invisible)
});




const lineIssueElement = document.getElementById('lineIssue');

// Get the value of the data-en attribute
const dataEn = lineIssueElement.getAttribute('data-en');

// Replace a part of the text with a <br> tag
const formattedDataEn = dataEn.replace('AND', '<br>AND');

// Set the innerHTML to display with the line break
lineIssueElement.innerHTML = formattedDataEn;


const lineIssueElement2 = document.getElementById('lineIssue2');

// Get all the <p> elements with the id 'toggle'
const toggleElements = lineIssueElement2.querySelectorAll('#toggle');

// Iterate through each <p> element to manipulate its text
toggleElements.forEach((toggleElement) => {
    // Get the value of the data-es attribute
    const dataEs = toggleElement.getAttribute('data-es');

    // Insert <br> after the word "DESARROLLO" for the first <p> element
    const formattedDataEs = dataEs.replace('¿POR QUÉ DESARROLLO', '¿POR QUÉ DESARROLLO<br>');

    // Update the innerHTML with the formatted text containing the line break
    toggleElement.innerHTML = formattedDataEs;
});
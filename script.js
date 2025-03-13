const pieces = document.querySelectorAll('.puzzle-piece');
const dropZones = document.querySelectorAll('.drop-zone');
const checkButton = document.getElementById('check-button');
const spareZone = document.getElementById('spare-zone'); 


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
        alert('done!');
        spareZone.style.display = 'block'; // Unhide the spare zone once all pieces are placed
    }
}



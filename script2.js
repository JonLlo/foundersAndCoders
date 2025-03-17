
const pieces2 = document.querySelectorAll('.puzzle-piece-2');
const dropZones2 = document.querySelectorAll('.drop-zone-2');
const spareZone2 = document.getElementById('spare-zone-2'); 
const autoFill2 = document.getElementById('autofill-2'); 

pieces2.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

dropZones2.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop2);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.id);
    event.dataTransfer.setData('elementId', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop2(event) {
    event.preventDefault();
    const pieceElementId = event.dataTransfer.getData('elementId');
    const piece = document.getElementById(pieceElementId);

    // Ensure event.target is actually the drop zone
    let dropZone = event.target;
    if (!dropZone.classList.contains('drop-zone-2')) {
        dropZone = dropZone.closest('.drop-zone-2'); // Get the closest drop-zone parent
    }

    if (!dropZone) return; // If no valid drop zone is found, exit

    // Now check if the drop zone already has a piece inside
    if (dropZone.children.length === 0) {
        dropZone.appendChild(piece);
        checkCompletion2()
        
    } 
    
}


function checkCompletion2() {
    const allFilled = [...dropZones2].filter(zone => zone !== spareZone2).every(zone => zone.children.length > 0);
    if (allFilled) {
        spareZone2.style.display = 'block'; // Unhide the spare zone once all pieces are placed
        //autoFill.style.display = 'block'; // Unhide the spare zone once all pieces are placed

    }
}




// Event listener for autofill button to place all pieces in the correct order
autoFill2.addEventListener('click', autoFillGrid2);

function autoFillGrid2() {
    // Clear all drop zones first

    // Correct order of pieces, you can adjust these IDs based on the correct order
    const correctOrder = ['piece1-2', 'piece2-2', 'piece3-2', 'piece4-2', 'piece5-2', 'piece6-2']; // Replace with your actual piece IDs

    // Loop over the correct order of pieces and place them in the respective drop zones
    correctOrder.forEach((pieceId, index) => {
        const piece = document.getElementById(pieceId);
        const dropZone = dropZones2[index]; // Assuming the drop zones are in correct order

        // Place the piece inside the drop zone
        if (dropZone) {
           
            dropZone.appendChild(piece);
            checkCompletion2()
        }
    });

}

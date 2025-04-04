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
        checkCompletion2();
    }
}

function checkCompletion2() {
    const allFilled = [...dropZones2].filter(zone => zone !== spareZone2).every(zone => zone.children.length > 0);
    if (allFilled) {
        spareZone2.style.display = 'block'; // Unhide the spare zone once all pieces are placed
    }
}

// Event listener for autofill button to place all pieces in the correct order
autoFill2.addEventListener('click', autoFillGrid2);

function autoFillGrid2() {
    const correctOrder = ['piece1-2', 'piece2-2', 'piece3-2', 'piece4-2', 'piece5-2', 'piece6-2'];

    // Loop over the correct order of pieces and place them in the respective drop zones
    correctOrder.forEach((pieceId, index) => {
        const piece = document.getElementById(pieceId);
        const dropZone = dropZones2[index]; // Assuming the drop zones are in correct order

        // Place the piece inside the drop zone
        if (dropZone) {
            dropZone.appendChild(piece);
            checkCompletion2();
        }
    });
}




/*3*/

const pieces3 = document.querySelectorAll('.puzzle-piece-3');
const dropZones3 = document.querySelectorAll('.drop-zone-3');
const spareZone3 = document.getElementById('spare-zone-3');
const autoFill3 = document.getElementById('autofill-3');

pieces3.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

dropZones3.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop3);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.id);
    event.dataTransfer.setData('elementId', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop3(event) {
    event.preventDefault();
    const pieceElementId = event.dataTransfer.getData('elementId');
    const piece = document.getElementById(pieceElementId);

    let dropZone = event.target;
    if (!dropZone.classList.contains('drop-zone-3')) {
        dropZone = dropZone.closest('.drop-zone-3');
    }

    if (!dropZone) return; // If no valid drop zone is found, exit

    // Now check if the drop zone already has a piece inside
    if (dropZone.children.length === 0) {
        dropZone.appendChild(piece);
        checkCompletion3()

    }

}


function checkCompletion3() {
    const allFilled = [...dropZones3].filter(zone => zone !== spareZone3).every(zone => zone.children.length > 0);
    if (allFilled) {
        spareZone3.style.display = 'block'; // Unhide the spare zone once all pieces are placed

    }
}




// Event listener for autofill button to place all pieces in the correct order
autoFill3.addEventListener('click', autoFillGrid3);

function autoFillGrid3() {
    // Clear all drop zones first

    // Correct order of pieces, you can adjust these IDs based on the correct order
    const correctOrder = ['piece1-3', 'piece2-3', 'piece3-3', 'piece4-3', 'piece5-3', 'piece6-3'];

    // Loop over the correct order of pieces and place them in the respective drop zones
    correctOrder.forEach((pieceId, index) => {
        const piece = document.getElementById(pieceId);
        const dropZone = dropZones3[index]; // Assuming the drop zones are in correct order

        // Place the piece inside the drop zone
        if (dropZone) {

            dropZone.appendChild(piece);
            checkCompletion3()
        }
    });

}


const pieces4 = document.querySelectorAll('.puzzle-piece-4');
const dropZones4 = document.querySelectorAll('.drop-zone-4');
const spareZone4 = document.getElementById('spare-zone-4');
const autoFill4 = document.getElementById('autofill-4');

pieces4.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

dropZones4.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop4);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.id);
    event.dataTransfer.setData('elementId', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop4(event) {
    event.preventDefault();
    const pieceElementId = event.dataTransfer.getData('elementId');
    const piece = document.getElementById(pieceElementId);

    let dropZone = event.target;
    if (!dropZone.classList.contains('drop-zone-4')) {
        dropZone = dropZone.closest('.drop-zone-4'); // Get the closest drop-zone parent
    }

    if (!dropZone) return; // If no valid drop zone is found, exit

    // Now check if the drop zone already has a piece inside
    if (dropZone.children.length === 0) {
        dropZone.appendChild(piece);
        checkCompletion4()

    }

}


function checkCompletion4() {
    const allFilled = [...dropZones4].filter(zone => zone !== spareZone4).every(zone => zone.children.length > 0);
    if (allFilled) {
        spareZone4.style.display = 'block'; // Unhide the spare zone once all pieces are placed


    }
}

// Event listener for autofill button to place all pieces in the correct order
autoFill4.addEventListener('click', autoFillGrid4);

function autoFillGrid4() {
    // Clear all drop zones first

    const correctOrder = ['piece1-4', 'piece2-4', 'piece3-4', 'piece4-4', 'piece5-4', 'piece6-4'];

    // Loop over the correct order of pieces and place them in the respective drop zones
    correctOrder.forEach((pieceId, index) => {
        const piece = document.getElementById(pieceId);
        const dropZone = dropZones4[index]; // Assuming the drop zones are in correct order

        // Place the piece inside the drop zone
        if (dropZone) {
            dropZone.appendChild(piece);
            checkCompletion4()
        }
    });
}
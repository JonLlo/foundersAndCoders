const pieces = document.querySelectorAll('.puzzle-piece');
const dropZones = document.querySelectorAll('.drop-zone');
const checkButton = document.getElementById('check-button');

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
    const pieceId = event.dataTransfer.getData('text');
    const pieceElementId = event.dataTransfer.getData('elementId');
    const piece = document.getElementById(pieceElementId);
    
    if (!event.target.hasChildNodes()) {
        event.target.appendChild(piece);
    }
}

// Check if the puzzle is correct
checkButton.addEventListener('click', () => {
    let correct = true;

    dropZones.forEach(zone => {
        const placedPiece = zone.firstChild;
        if (placedPiece) {
            const pieceId = placedPiece.dataset.id;
            const correctId = zone.dataset.order;

            if (pieceId !== correctId) {
                correct = false;
            }
        } else {
            correct = false;
        }
    });

    if (correct) {
        alert("🎉 Congratulations! You solved the puzzle!");
    } else {
        alert("❌ Incorrect. Try again!");
    }
});



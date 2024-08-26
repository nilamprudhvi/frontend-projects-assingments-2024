let gameActive = true;
let currentPlayer = 'x';
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



const statusDisplay = document.getElementById('status');

const winningMessage = function() {
    return currentPlayer + "'s wins";
}

const drawMessage = function() {
    return "Draw!";
}

const currentPlayerTurn = function() {
    return "It is " + currentPlayer + "'s turn";
}

document.querySelectorAll(".cell").forEach(function(cell) {
    cell.addEventListener('click', cellClick);
});

document.querySelector('.restart').addEventListener('click', restartGame);

function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}

function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function playerChange() {
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    statusDisplay.innerHTML = currentPlayerTurn();
}

function resultValidation() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = gameState[winCondition[0]];
        const b = gameState[winCondition[1]];
        const c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    if (!gameState.includes("")) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    playerChange();
}



function restartGame() {
    gameActive = true;
    currentPlayer = 'x';
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();

    document.querySelectorAll('.cell').forEach(function(cell) {
        cell.innerHTML = "";
    });
}


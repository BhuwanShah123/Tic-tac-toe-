let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            checkWinner();
        }
    });
});

document.getElementById('reset-button').addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach((cell) => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const combination = winningCombinations[i];
        if (
            gameBoard[combination[0]] !== '' &&
            gameBoard[combination[0]] === gameBoard[combination[1]] &&
            gameBoard[combination[0]] === gameBoard[combination[2]]
        ) {
            alert(`Player ${gameBoard[combination[0]]} wins!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a draw!');
    }
}
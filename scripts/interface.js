
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let squareClicked = event.target;
    let position = squareClicked.id;
    if(handleMove(position)) {
        setTimeout(() => {
            let message = document.querySelector("#msg");
            message.insertAdjacentHTML('beforeend',"O Jogo Acabou - O Vencedor foi " + playerTime + "</br>");
             
            // alert("O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 10);
    }
    updateSquares(position);
}

function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetBoard() { 
     resetState();
     clearSymbols();   
        
}

function clearSymbols() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = '';
    }) 
}


function resetState() {
    board = ["","","","","","","","",""];
    playerTime = 0;
    gameOver = false;
}

let clearBoards = document.getElementById("reset");
clearBoards.addEventListener('click', resetBoard);
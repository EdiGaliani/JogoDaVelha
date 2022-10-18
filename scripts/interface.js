
/* document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
        squares.forEach((square, index) => {
            if(index % 2 === 0) {
                square.style.backgroundColor = "black";
            }else {
                square.style.backgroundColor = "white";
            }
            let isPar = index % 2 === 0;
            square.style.backgroundColor = (isPar) ? "black" : "white";
            square.addEventListener('click', handleClick);
    })
}) */

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    let squareClicked = event.target;
    let position = squareClicked.id;
    handleMove(position);
    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != "") {
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    })
}
let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset-btn');
let newGame = document.querySelector('#new-btn');
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector('#msg')
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let flag = 0;

let resetGame = () => {
    flag = 0;
    enableBoxes();
    msgCon.classList.add("hide");
}

let disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }

}
let enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }

}

let showWinner = (winner) => {
    msg.innerHTML = `Congratulations the winner of this game is ${winner}`;
    msgCon.classList.remove('hide')
    disableBoxes()
}

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerHTML;
        let position2 = boxes[pattern[1]].innerHTML;
        let position3 = boxes[pattern[2]].innerHTML;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);

                // console.log("winner")
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (flag == 0) {
            box.style.color = 'blue'
            box.innerHTML = 'O';
            flag = 1;
        }
        else {
            box.style.color = 'green'
            box.innerHTML = 'X';
            flag = 0;
        }

        box.disabled = true;
        checkWinner();
    })


})



reset.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);




let bgMusic = new Audio('music.mp3');
let turnMusic = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let isgameover = false;

let turn = 'X';
const changeTurn = () => {
    return turn == 'X' ? '0' : 'X';
}

const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let win = [
        [0, 1, 2, 5, 5.2, 0],
        [3, 4, 5, 5, 15.3, 0],
        [6, 7, 8, 5, 25.4, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15 , 90],
        [2, 5, 8, 15.2, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    win.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')) {
            document.querySelector('.textInfo').innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.getElementById('img').style.width = '200px';
            gameOver.play()
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }

    })
}

// bgMusic.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (isgameover) {
            return
        }

        else if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('textInfo')[0].innerText = `Turn For ${turn}`;
            }
        }

    })
})

reset.onclick = () => {
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = '';
    })
    turn = 'X';
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName('textInfo')[0].innerText = `Turn For ${turn}`;
    document.getElementById('img').style.width = '0px';


}

let ewd= reset.innerWidth;
console.log(reset.offsetWidth);
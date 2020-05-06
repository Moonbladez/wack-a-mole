const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector(".start");
const gameWrapper = document.querySelector(".game")
let lastHole;
let gameOver = true;
let score = 0;
let countdown = 10000;




const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const randomHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('try again');
        //rerun
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}



const peepUp = () => {
    const time = randomTime(200, 1000)
    const hole = randomHole(holes)
    hole.classList.add("up");

    setTimeout(() => {
        hole.classList.remove("up")
        if (!gameOver) {
            peepUp()
        }
    }, time)
}

const startGame = () => {
    gameWrapper.style.display = "flex";
    scoreBoard.textContent = 0;
    gameOver = false;
    score = 0;
    peepUp();
    setTimeout(() => gameOver = true, countdown)
}

function wack(event) {
    score++;
    console.log(this.classList)
    this.classList.remove("up")
    scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener("click", wack))




peepUp()
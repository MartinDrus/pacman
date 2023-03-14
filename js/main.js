import Target from "./target.js";
import Snake from "./snake.js";
import { getRanking, insertNewScore } from "./score.js";

let topScorer = await getRanking(5)

let canvas = document.querySelector("#canvas");
let limitX = window.innerWidth - 200;
let limitY = window.innerHeight - 300;
canvas.width = limitX;
canvas.height = limitY;
let c = canvas.getContext("2d");

let scorerName = document.querySelector("#name-input");
let submitBtn = document.querySelector("#submit-btn");

let retryBox = document.querySelector("#retry-box");
retryBox.style.display = "none";

let myReq;

let isRunning = false;

let snake = new Snake(limitX, limitY);
let target = new Target(limitX, limitY);

let firstCount = document.querySelector("#id-1");
let secondCount = document.querySelector("#id-2");
let thirdCount = document.querySelector("#id-3");

submitBtn.addEventListener('click', async (evt)=>{
    evt.preventDefault();
    let score = target.getScore()
    let username = scorerName.value;
    if(!username) username = "noName";
    await insertNewScore(username, score);
    showTopScorer();
    location.reload();
})


document.addEventListener("resize", (evt) => {
    canvas.width = limitX;
    canvas.height = limitY;

    init();
});

function showTopScorer() {
    let scoreView = document.querySelector("#scoretab");
    scoreView.replaceChildren();

    let orderedList = document.createElement('ol');
    topScorer.forEach((player, idx) => {
        let li = document.createElement('li');
        li.textContent = `${idx+1}. ${player.name}: ${player.score}`
        orderedList.appendChild(li);
    })

    scoreView.appendChild(orderedList);

}

function init(){
    let snake = new Snake();

    snake.draw();

    target.renderTargets()

    target.draw();

    showTopScorer();
}
init();

////----------Steuerung------------

document.addEventListener("keydown", (evt) => snake.changeDirection(evt));

document.querySelector("#start-btn").addEventListener("click", () => {if (!isRunning) triggerAnimation()});
document.querySelector("#retry-btn").addEventListener("click", () => {if (!isRunning) triggerAnimation()});

document.addEventListener("keydown", (evt) => {if(evt.key === "Enter" && !isRunning) triggerAnimation()});

function triggerAnimation() {
    isRunning = true;

    target.resetTargetAndScore();
    retryBox.style.display = "none";
    thirdCount.style.display = "block";
    setTimeout(() => {
        thirdCount.style.display = "none";
        secondCount.style.display = "block";
        setTimeout(() => {
            secondCount.style.display = "none";
            firstCount.style.display = "block";
            setTimeout(() => {
                firstCount.style.display = "none";
                animate();

            }, "1000");
            
        }, "1000");
        
    }, "1000");

}


function animate() {
    //Wiederholung der Funktion
    myReq = requestAnimationFrame(animate);

    //Das Canvas wird neu geladen
    c.clearRect(0, 0, limitX, limitY);

    target.draw();

    let pos = snake.letsGoSnake()
    let scored = target.update(pos);
    if (scored) {
        snake.increaseSpeed();
        target.increaseCounter();
    }
    if (pos.gameOver) {
        cancelAnimationFrame(myReq);
        retryBox.style.display = "flex";
        snake.reset();
        isRunning = false;
    }

}


















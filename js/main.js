import Target from "./target.js";
import Snake from "./snake.js";

let canvas = document.querySelector("#canvas");
let limitX = window.innerWidth - 100;
let limitY = window.innerHeight - 100;
canvas.width = limitX;
canvas.height = limitY;
let c = canvas.getContext("2d");



let snake = new Snake(limitX, limitY);
let target = new Target(limitX, limitY);


document.addEventListener("resize", () => {
    canvas.width = limitX;
    canvas.height = limitY;

    init();
});

function init(){
    let snake = new Snake();
    snake.draw();

    target.renderTargets()

    target.draw();
}
init();


////----------Steuerung------------

document.addEventListener("keydown", (evt) => snake.changeDirection(evt));

document.querySelector("#start-btn").addEventListener("click", animate);
// document.querySelector("#retry-btn").addEventListener("click", start);

function animate() {
    //Wiederholung der Funktion
    requestAnimationFrame(animate);
    //Das Canvas wird neu geladen
    c.clearRect(0, 0, limitX, limitY);

    target.draw();


    let pos = snake.letsGoSnake()
    target.update(pos);

}
//animate();


















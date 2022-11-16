import Target from "./target.js";
import Cage from "./snakeCage.js";
import Snake from "./snake.js";

let canvas = document.querySelector("#canvas");
canvas.width = (innerWidth - 100);
canvas.height = (innerHeight - 200);
let c = canvas.getContext("2d");



let cage = new Cage();
let target = new Target();

let snake = new Snake();

let limitX = innerWidth - 100;
let limitY = innerHeight - 200;



window.addEventListener("resize", () => {
    canvas.width = limitX;
    canvas.height = limitY;

    init();
});

function init(){
    let snake = new Snake();
    snake.draw();
}
init();




let directions = {
    left: true,
    right: false,
    up: false,
    down: false
}








////----------Steuerung------------

document.addEventListener("keydown", (evt) => snake.changeDirection(evt));

document.querySelector("#start-btn").addEventListener("click", animate);
// document.querySelector("#retry-btn").addEventListener("click", start);



function animate() {
    //Wiederholung der Funktion
    requestAnimationFrame(animate);
    //Das Canvas wird neu geladen
    c.clearRect(0, 0, limitX, limitY);


    snake.letsGoSnake()

}
animate();


















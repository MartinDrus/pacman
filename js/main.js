import Target from "./target.js";
import Cage from "./snakeCage.js";
import Snake from "./snake.js";

let cage = new Cage();

let snake = new Snake(cage);

let target = new Target(cage);




////----------Steuerung------------

document.addEventListener("keydown", (evt) => snake.changeDirection(evt));

document.querySelector("#start-btn").addEventListener("click", () => {
    target.renderRandomizedTarget();
    setInterval(() => {
        let snakePosition = snake.letsGoSnake();
        target.gotMe(snakePosition)
    }, 10);
})














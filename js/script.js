
let playGround = document.querySelector("#playground");
let playGroundBorderSize = parseInt(getComputedStyle(playGround,null).getPropertyValue('border-width').slice(0, -2));
let playGroundWidth = parseInt(getComputedStyle(playGround).width.slice(0, -2));
let playGroundHeight = parseInt(getComputedStyle(playGround).height.slice(0, -2));


let theSnake = document.querySelector("#snake");
let snakeHeadSize = parseInt(getComputedStyle(theSnake).width.slice(0, -2));
let currentPosX = theSnake.getBoundingClientRect().left - (playGround.getBoundingClientRect().left + playGroundBorderSize);
let currentPosY = theSnake.getBoundingClientRect().top - (playGround.getBoundingClientRect().top + playGroundBorderSize);


//defaultSpeed
const motionSpeed = 1;
//defaultDirection
let currentDirection = "ArrowRight";

document.addEventListener("keydown", changeDirection);

function changeDirection(e){
    let directionSelectedByUser = e.key;

    switch (directionSelectedByUser) {
        case "ArrowRight":
            if (currentDirection !== "ArrowRight" && currentDirection !== "ArrowLeft") {
                currentDirection = directionSelectedByUser;
            }
            break;
        case "ArrowLeft":
            if (currentDirection !== "ArrowRight" && currentDirection !== "ArrowLeft") {
                currentDirection = directionSelectedByUser;
            }
            break;
        case "ArrowUp":
            if (currentDirection !== "ArrowUp" && currentDirection !== "ArrowDown") {
                currentDirection = directionSelectedByUser;
            }
            break;
        case "ArrowDown":
            if (currentDirection !== "ArrowUp" && currentDirection !== "ArrowDown") {
                currentDirection = directionSelectedByUser;
            }
            break;
        default:
            break;
    }
}

// setInterval(() => {
//    letsGoSnake()
// }, 100);


function letsGoSnake() {

    switch (currentDirection) {
        case "ArrowUp":
            if (currentPosY > 0) {
                currentPosY -= motionSpeed;
            }
            break;
        case "ArrowDown":
            if (currentPosY < (playGroundHeight - snakeHeadSize)) {
                currentPosY += motionSpeed;
            }
            break;
        case "ArrowRight":
            if (currentPosX < (playGroundWidth - snakeHeadSize)) {
                currentPosX += motionSpeed;
            }
            break;
        case "ArrowLeft":
            if (currentPosX > 0) {
                currentPosX -= motionSpeed;
            }
            break;  
        default:
            break;
    }

    if (currentDirection === "ArrowRight" || currentDirection === "ArrowLeft") {
        theSnake.style.left = `${currentPosX}px`
    } else if (currentDirection === "ArrowUp" || currentDirection === "ArrowDown") {
        theSnake.style.top = `${currentPosY}px`
    }
}





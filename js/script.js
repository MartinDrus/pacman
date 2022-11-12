
let playGround = document.querySelector("#playground");
let playGroundBorderSize = parseInt(getComputedStyle(playGround,null).getPropertyValue('border-width').slice(0, -2));


let theSnake = document.querySelector("#snake");
let currentPosX = theSnake.getBoundingClientRect().left - (playGround.getBoundingClientRect().left + playGroundBorderSize);
let currentPosY = theSnake.getBoundingClientRect().top - (playGround.getBoundingClientRect().top + playGroundBorderSize);

//defaultSpeed
const motionSpeed = 10;
//defaultDirection
let currentDirection = "ArrowRight";



document.addEventListener("keydown", changeDirection);




function changeDirection(e){
    let directionSelectedByUser = e.key;
    let newPosX;
    let newPosY;




    if (currentDirection !== directionSelectedByUser) {
        switch (directionSelectedByUser) {
            case "ArrowUp":
                newPosY = letsGoSnake(currentPosY)

                currentDirection = "ArrowUp";
                break;
            case "ArrowDown":
                newPosY = letsGoSnake(currentPosY)

                currentDirection = "ArrowDown";
                break;
            case "ArrowRight":
                newPosX = letsGoSnake(currentPosX)
                
                currentDirection = "ArrowRight";
                break;
            case "ArrowLeft":
                newPosX = letsGoSnake(currentPosX)

                currentDirection = "ArrowLeft";
                break;  
            default:
                break;
        }

        if (currentDirection === "ArrowRight" || currentDirection === "ArrowLeft") {
            theSnake.style.left = `${newPosX}px`
        } else if (currentDirection === "ArrowUp" || currentDirection === "ArrowDown") {
            theSnake.style.top = `${newPosY}px`
        }

    }



}


setInterval((e) => {
    let test = letsGoSnake()
    console.log(test);
    console.log(e);
}, 2000);



function letsGoSnake(currentPosXY) {
    return currentPosXY + motionSpeed;
}





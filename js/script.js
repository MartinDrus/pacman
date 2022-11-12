
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



    if (currentDirection !== directionSelectedByUser) {
        switch (e.key) {
            case "ArrowUp":
                
                break;
            case "ArrowDown":
                
                break;
            case "ArrowRight":
                
                break;
            case "ArrowLeft":
                
                break;  
            default:
                break;
        }
    }

    theSnake.style.left = `${currentPosX}px`

}


// setInterval((e) => {
//     let test = letsGoSnake()
//     console.log(test);
//     console.log(e);
// }, 2000);



function letsGoSnake(currentPosXY) {
    return currentPosXY + motionSpeed;
}

console.log(letsGoSnake());




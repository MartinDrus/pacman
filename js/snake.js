
let theSnake = document.querySelector("#snake");

class Snake {
    motionSpeed = 1;
    currentDirection = "ArrowRight";

    constructor(cage){
        this.limitX = cage.getWidth();
        this.limitY = cage.getHeight();
        this.wallSize = cage.getBorderSize();
        this.snakeHeadSize = parseInt(getComputedStyle(theSnake).width.slice(0, -2));
        this.currentPosX = 0;
        this.currentPosY = 0;
    }

    getSnakeSize(){
        return snakeHeadSize;
    }



    changeDirection(e){
        let directionSelectedByUser = e.key;
    
        switch (directionSelectedByUser) {
            case "ArrowRight":
                if (this.currentDirection !== "ArrowRight" && this.currentDirection !== "ArrowLeft") {
                    this.currentDirection = directionSelectedByUser;
                }
                break;
            case "ArrowLeft":
                if (this.currentDirection !== "ArrowRight" && this.currentDirection !== "ArrowLeft") {
                    this.currentDirection = directionSelectedByUser;
                }
                break;
            case "ArrowUp":
                if (this.currentDirection !== "ArrowUp" && this.currentDirection !== "ArrowDown") {
                    this.currentDirection = directionSelectedByUser;
                }
                break;
            case "ArrowDown":
                if (this.currentDirection !== "ArrowUp" && this.currentDirection !== "ArrowDown") {
                    this.currentDirection = directionSelectedByUser;
                }
                break;
            default:
                break;
        }
    }

    letsGoSnake() {
        let pos = {};

        switch (this.currentDirection) {
            case "ArrowUp":
                if (this.currentPosY > 0) {
                    this.currentPosY -= this.motionSpeed;
                }
                break;
            case "ArrowDown":
                if (this.currentPosY < (this.limitY - this.snakeHeadSize)) {
                    this.currentPosY += this.motionSpeed;
                }
                break;
            case "ArrowRight":
                if (this.currentPosX < (this.limitX - this.snakeHeadSize)) {
                    this.currentPosX += this.motionSpeed;
                }
                break;
            case "ArrowLeft":
                if (this.currentPosX > 0) {
                    this.currentPosX -= this.motionSpeed;
                }
                break;  
            default:
                break;
        }
    
        if (this.currentDirection === "ArrowRight" || this.currentDirection === "ArrowLeft") {
            theSnake.style.left = `${this.currentPosX}px`
        } else if (this.currentDirection === "ArrowUp" || this.currentDirection === "ArrowDown") {
            theSnake.style.top = `${this.currentPosY}px`
        }

        return pos = {x: this.currentPosX, y: this.currentPosY}
    }




}

export default Snake;
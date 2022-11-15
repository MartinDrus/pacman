
let retryContainer = document.querySelector("#retry-alert");
let theSnake = document.querySelector("#snake");
let pacMan = document.querySelector("img");
let target = document.querySelector("#target")


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

    getPosX(){
        return this.currentPosX;
    }

    setPosX(posX) {
        this.currentPosX = posX;
    }

    getPosY(){
        return this.currentPosY;
    }

    setPosY(posY) {
        this.currentPosY = posY;
    }


    getSnakeSize(){
        return this.snakeHeadSize;
    }

    changeDirection(e){
        let directionSelectedByUser = e.key;
    
        switch (directionSelectedByUser) {
            case "ArrowRight":
                if (this.currentDirection !== "ArrowRight" && this.currentDirection !== "ArrowLeft") {
                    this.currentDirection = directionSelectedByUser;
                    pacMan.style.transform = "rotate(0turn)";
                }
                break;
            case "ArrowLeft":
                if (this.currentDirection !== "ArrowRight" && this.currentDirection !== "ArrowLeft") {
                    this.currentDirection = directionSelectedByUser;
                    pacMan.style.transform = "scaleX(-1)";
                }
                break;
            case "ArrowUp":
                if (this.currentDirection !== "ArrowUp" && this.currentDirection !== "ArrowDown") {
                    this.currentDirection = directionSelectedByUser;
                    pacMan.style.transform = "rotate(0.75turn)";
                }
                break;
            case "ArrowDown":
                if (this.currentDirection !== "ArrowUp" && this.currentDirection !== "ArrowDown") {
                    this.currentDirection = directionSelectedByUser;
                    pacMan.style.transform = "rotate(0.25turn)";
                }
                break;
            default:
                break;
        }
    }

    letsGoSnake(nIntervId) {
        retryContainer.style.display = "none";
        theSnake.style.display = "block";
        pacMan.style.display = "block";

        let pos = {};

        switch (this.currentDirection) {
            case "ArrowUp":
                if (this.currentPosY > 0) {
                    this.currentPosY -= this.motionSpeed;
                } else this.tryAgain(nIntervId);
                break;
            case "ArrowDown":
                if (this.currentPosY < (this.limitY - this.snakeHeadSize)) {
                    this.currentPosY += this.motionSpeed;
                } else this.tryAgain(nIntervId);
                break;
            case "ArrowRight":
                if (this.currentPosX < (this.limitX - this.snakeHeadSize)) {
                    this.currentPosX += this.motionSpeed;
                } else this.tryAgain(nIntervId);
                break;
            case "ArrowLeft":
                if (this.currentPosX > 0) {
                    this.currentPosX -= this.motionSpeed;
                } else this.tryAgain(nIntervId);
                break;  
            default:
                break;
        }
    
        if (this.currentDirection === "ArrowRight" || this.currentDirection === "ArrowLeft") {
            theSnake.style.left = `${this.currentPosX}px`;
        } else if (this.currentDirection === "ArrowUp" || this.currentDirection === "ArrowDown") {
            theSnake.style.top = `${this.currentPosY}px`;
        }
        return pos = {x: this.currentPosX, y: this.currentPosY}
    }

    tryAgain(nIntervId){
        clearInterval(nIntervId);
        this.currentDirection = "ArrowRight";
        pacMan.style.transform = "rotate(0turn)";

        retryContainer.style.display = "flex";
        theSnake.style.display = "none";
        pacMan.style.display = "none";
        target.style.display = "none";

        this.setPosX(0);
        this.setPosY(0);


    }

}

export default Snake;
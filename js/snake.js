
let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

class Snake {
    currentDirection = "ArrowRight";
    speed = 1;
    radius = 15;

    constructor(limitX, limitY){
        this.posX = this.radius;
        this.posY = this.radius;
        this.limitX = limitX;
        this.limitY = limitY;
        this.startAngle = 0.25;
        this.endAngle = 1.25;
        this.eyeX = 0;
        this.eyeY = -10;
    }

    draw() {
        c.beginPath();
        c.arc(this.posX, this.posY, this.radius, this.startAngle * Math.PI, this.endAngle * Math.PI, false);
        c.fillStyle = "rgb(255, 255, 0)";
        c.fill();
        c.beginPath();
        c.arc(this.posX, this.posY, this.radius, (this.startAngle + 0.5) * Math.PI, (this.endAngle + 0.5) * Math.PI, false);
        c.fill();
        c.beginPath();
        c.arc(this.posX + this.eyeX, this.posY + this.eyeY, 2.5, 0, 2 * Math.PI, false);
        c.fillStyle = "rgb(0, 0, 0)";
        c.fill();
    }


    changeDirection(e){
        let directionSelectedByUser = e.key;
    
        switch (directionSelectedByUser) {
            case "ArrowRight":
                if (this.currentDirection !== "ArrowRight" && this.currentDirection !== "ArrowLeft") {
                    this.currentDirection = directionSelectedByUser;
                    this.startAngle = 0.25;
                    this.endAngle = 1.25;
                    this.eyeX = 0;
                    this.eyeY = -10;
                }
                break;
            case "ArrowLeft":
                if (this.currentDirection !== "ArrowRight" && this.currentDirection !== "ArrowLeft") {
                    this.currentDirection = directionSelectedByUser;
                    this.startAngle = 1.25;
                    this.endAngle = 0.25;
                    this.eyeX = 0;
                    this.eyeY = -10;
                }
                break;
            case "ArrowUp":
                if (this.currentDirection !== "ArrowUp" && this.currentDirection !== "ArrowDown") {
                    this.currentDirection = directionSelectedByUser;
                    this.startAngle = 1.75;
                    this.endAngle = 0.75;
                    this.eyeX = 10;
                    this.eyeY = 0;

                }
                break;
            case "ArrowDown":
                if (this.currentDirection !== "ArrowUp" && this.currentDirection !== "ArrowDown") {
                    this.currentDirection = directionSelectedByUser;
                    this.startAngle = 0.75;
                    this.endAngle = 1.75;
                    this.eyeX = 10;
                    this.eyeY = 0;
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
                if (this.posY > this.radius) {
                    this.posY -= this.speed;
                }
                break;
            case "ArrowDown":
                if (this.posY < this.limitY - this.radius ) {
                    this.posY += this.speed;
                }
                break;
            case "ArrowRight":
                if (this.posX < this.limitX - this.radius ) {
                    this.posX += this.speed;
                } 
                break;
            case "ArrowLeft":
                if (this.posX > this.radius) {
                    this.posX -= this.speed;
                } 
                break;  
            default:
                break;
        }
        this.draw();
        return pos = {x: this.posX, y: this.posY};
    }
}

export default Snake;
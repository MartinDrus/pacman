
let dot = document.querySelector("#target")
let score = document.querySelector("#score");

class Target{

    scoreCount = 0;

    constructor(cage){
        this.cage = cage;
        this.cageWidth = cage.getWidth();
        this.cageHeight = cage.getHeight();
        this.posX = 0
        this.posY = 0
    }

    getPosX(){
        return this.posX;
    }

    setPosX(newPosX){
        this.posX = newPosX;
    }

    getPosY(){
        return this.posY;
    }

    setPosY(newPosY){
        this.posY = newPosY;
    }





    renderRandomizedTarget(){
        let newPosX = Math.floor(Math.random()*this.cageWidth);
        let newPosY = Math.floor(Math.random()*this.cageHeight);

        this.setPosX(newPosX)
        this.setPosY(newPosY)

        dot.style.top = `${this.posY}px`;
        dot.style.left = `${this.posX}px`;
        dot.style.display = "block";
    }





    gotMe(snakePos){
        if (Math.abs(snakePos.x - this.getPosX()) <= 10 && Math.abs(snakePos.y - (this.getPosY()+10)) <= 10) {


            //console.log(Math.abs(snakePos.x - this.getPosX())+"  "+Math.abs(snakePos.y - this.getPosY()));
            this.renderRandomizedTarget();
            this.scoreCount++;
        }

        score.innerHTML = `Score: ${this.scoreCount}`
        

    }



}

export default Target;
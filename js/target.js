let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

let score = document.querySelector("#score");

class Target{

    targetImg;
    counter = 0;

    constructor(limitX, limitY){
        this.limitX = limitX;
        this.limitY = limitY;
        this.posX = limitX/2;
        this.posY = limitY/2;
        this.radius = 15;
    }

    resetTargetAndScore(){
        this.posX = this.limitX/2;
        this.posY = this.limitY/2;
        this.counter = 0
        score.innerHTML = `Score: ${this.counter}`;

    }
    increaseCounter(){
        this.counter++;
        score.innerHTML = `Score: ${this.counter}`;
    }


    renderTargets(){
    let targetArray = [];

    const appel = new Image();
    appel.src = "./img/apfel.png";
    targetArray.push(appel);

    const banana = new Image();
    banana.src = "./img/banane.png";
    targetArray.push(banana);

    const pineapple = new Image();
    pineapple.src = "./img/ananas.png";
    targetArray.push(pineapple);

    let randomIndex = Math.floor(Math.random() * targetArray.length);
    this.targetImg = targetArray[randomIndex];

    }


    

    draw() {
        c.drawImage(this.targetImg, this.posX, this.posY, 30, 30);
    }

    update(PacManPos) {
        let gotYou = false;
        //console.log(Math.abs(this.posX - (PacManPos.x - this.radius)) , Math.abs(this.posY - (PacManPos.y - this.radius)));

        if((Math.abs((this.posX - (PacManPos.x - this.radius))) < 15) && Math.abs((this.posY - (PacManPos.y - this.radius))) < 15) {

            this.renderTargets();
            this.randomizePosition();
            this.draw();
            gotYou = true;
        }
        return gotYou;
    }

    randomizePosition(){
        this.posX = this.getRandomIntInclusive(130, (canvas.width-30));
        this.posY = this.getRandomIntInclusive(230, (canvas.height-30));

    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
        // The maximum is inclusive and the minimum is inclusive
      }

}

export default Target;
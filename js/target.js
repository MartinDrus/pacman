let canvas = document.querySelector("#canvas");
let c = canvas.getContext("2d");

class Target{

    targetImg;

    constructor(limitX, limitY){
        this.limitX = limitX;
        this.limitY = limitY;
        this.posX = limitX/2;
        this.posY = limitY/2;
        this.radius = 15;


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

        console.log(this.posX - (PacManPos.x - this.radius) , this.posY - (PacManPos.y - this.radius));

        if((this.posX - (PacManPos.x - this.radius)) < 10 && (this.posY - (PacManPos.y - this.radius)) < 10) {

            this.renderTargets();
            this.randomizePosition();
            this.draw();
        }
    }

    randomizePosition(){
        this.posX = Math.floor(Math.random() * (this.limitX - 110) + 110);
        this.posY = Math.floor(Math.random() * (this.limitY - 110) + 110);
    }



 

}

export default Target;
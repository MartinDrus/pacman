
let playGround = document.querySelector("#playground");

class Cage {

    constructor(){
        this.borderSize = parseInt(getComputedStyle(playGround,null).getPropertyValue('border-width').slice(0, -2));
        this.width = parseInt(getComputedStyle(playGround).width.slice(0, -2));
        this.height = parseInt(getComputedStyle(playGround).height.slice(0, -2));
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getBorderSize(){
        return this.borderSize;
    }


    



}

export default Cage;
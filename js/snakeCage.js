
const playGround = document.querySelector("#playground");
const ctx = playGround.getContext("2d");

console.log(ctx);

ctx.fillStyle = "rgb(155, 138, 115)";
ctx.fillRect(5,5,70,70);

function make_base() {
   
    let pacMan_image = new Image();
    pacMan_image.src = `./img/pacman_icon-icons.com_70908.png`;
    // pacMan_image.style.width = "10px";
    // pacMan_image.style.height = "10px";
    pacMan_image.onload = function name() {
        ctx.drawImage(pacMan_image, 0, 0, 100, 100, 0, 0, 100, 100);
    }
   

}

make_base()



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
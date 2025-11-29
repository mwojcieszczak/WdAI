export default class Base{
    constructor(){
        this.img = document.createElement("img")
        this.img.src = "assets/Flappy Bird/base.png"
    }

    draw(ctx, offset){
        ctx.drawImage(this.img, 0+offset,400)
    }
}
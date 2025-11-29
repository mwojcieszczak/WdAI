export default class Pipe{
    constructor(){
        this.img = document.createElement("img")
        this.img.src = "assets/Flappy Bird/pipe-green.png"

        this.down = document.createElement("img")
        this.down.src = "assets/Flappy Bird/pipe-green-down.png"
    }

    draw(ctx, offsetX, offsetY){
        ctx.drawImage(this.img, offsetX,offsetY)
        ctx.drawImage(this.down, offsetX, offsetY-320-100)
    }
}
export default class Background{
    constructor(){
        this.img = document.createElement("img")
        this.img.src = "assets/Flappy Bird/background-day.png"
    }

    draw = (ctx) =>{
        ctx.drawImage(this.img, 0, 0, 288, 512)
    }
}
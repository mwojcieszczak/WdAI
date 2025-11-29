export default class Start{
    constructor(){
        this.img = document.createElement("img")
        this.img.src = "assets/UI/message.png"
    }

    draw = (ctx) =>{
        ctx.drawImage(this.img, 52, 122)
    }
}
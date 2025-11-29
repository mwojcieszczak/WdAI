export default class Score{
    constructor(){

        this.score = 0

        this.digits = new Array();
        for (let i =0; i<10; i++){
            const img = document.createElement("img")
            img.src= "/assets/UI/Numbers/"+i+".png"
            this.digits.push(img)
        }

        this.incrementSound = new Audio("assets/Sound Efects/point.wav")
    }

    draw = (ctx) =>{
        const numberAsAString = new String(this.score)

        let i = 0
        numberAsAString.split("").forEach(element => {
            const digit = parseInt(element)
            ctx.drawImage(this.digits[digit], 22+i, 22)
            i+=this.digits[digit].width
        });
    }

    increment = ()=>{
        this.score+=1
        this.incrementSound.play()
    }
}
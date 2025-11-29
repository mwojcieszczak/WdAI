export default class GameOver{
    constructor(){
        this.img = document.createElement("img")
        this.img.src = "assets/UI/gameover.png"

        this.digits = new Array();
        for (let i =0; i<10; i++){
            const img = document.createElement("img")
            img.src= "/assets/UI/Numbers/"+i+".png"
            this.digits.push(img)
        }
    }

    draw = (ctx, score) =>{
        ctx.drawImage(this.img, 52, 122)

        let text = localStorage.getItem("scores")
        let scores = JSON.parse(text)

        const maxScore = Math.max(...scores)

        let i = 0
        String(score).split("").forEach(element => {
            const digit = parseInt(element)
            ctx.drawImage(this.digits[digit], 130+i, 180)
            i+=this.digits[digit].width
        });

        i = 0
        String(maxScore).split("").forEach(element => {
            const digit = parseInt(element)
            ctx.drawImage(this.digits[digit], 130+i, 220)
            i+=this.digits[digit].width
        });

    }
}
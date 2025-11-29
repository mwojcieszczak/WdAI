import Background from "./Background.js"
import Base from "./Base.js"
import Bird from "./Bird.js"
import GameOver from "./GamoOver.js"
import Pipe from "./Pipe.js"
import Score from "./Score.js"

export default class Board{
    constructor(){
        this.x = 0
        this.background = new Background()
        this.base = new Base()
        this.pipe = new Pipe()
        this.pipes = new Array()
        this.bird = new Bird(100, 200)
        this.score = new Score()
        this.gameOver = new GameOver()
        
        this.stop = false

        for (let i =0 ;i<100; i++){
            const offsetY = 200 + Math.round(Math.random()*200)
            const offsetX = 200 + 150*i + Math.round(Math.random()*20)
            this.pipes.push([offsetY, offsetX])
        }

        this.dieSound = new Audio("assets/Sound Efects/die.wav")
        this.hitSound = new Audio("assets/Sound Efects/hit.wav")
    }

    draw(ctx){
        this.background.draw(ctx)

        let i = 0
        let sc = 0
        this.pipes.forEach(([offstY, offsetX])=>{
            if (this.collision(offsetX, offstY)) {
                this.stop = true
                this.hitSound.play()
            }
            if(this.x+offsetX+52 < this.bird.getX()) sc+=1
            this.pipe.draw(ctx, this.x+offsetX, offstY)
            i+=1
        })

        if (sc>this.score.score) this.score.increment()

        this.bird.draw(ctx)
        if (this.bird.getY() < 400 - 12)
            this.bird.fall()
        else{
            this.stop = true
        }

        this.base.draw(ctx, this.x%288)
        this.base.draw(ctx, this.x%288+288)

        this.score.draw(ctx)

        if (this.stop){
            window.onclick = null
            if (this.bird.getY() > 400 - 12){
                this.dieSound.play()
                this.saveScore()
                this.gameOver.draw(ctx, this.score.score)
                return true
            }
        }else{
            this.x-=1
        }
        return false
    }

    collision(offsetX, offsetY){
        return this.x + offsetX < this.bird.getX()+17 && this.x+offsetX+52 > this.bird.getX() && (offsetY<this.bird.getY()+12 || offsetY-100>this.bird.getY())
    }

    reset(){
        this.x = 0


        this.bird.x = 100
        this.bird.y = 200
        this.bird.fallspeed = 0.1
        this.bird.rotation = 0
        this.score.score = 0

        this.pipes = new Array()

        for (let i =0 ;i<100; i++){
            const offsetY = 200 + Math.round(Math.random()*200)
            const offsetX = 200 + 150*i + Math.round(Math.random()*20)
            this.pipes.push([offsetY, offsetX])
        }

        this.stop = false
    }

    saveScore(){
        let text = localStorage.getItem("scores")
        let scores = JSON.parse(text)

        if (!scores){
            scores = [this.score.score, 0, 0, 0, 0]
            localStorage.setItem("scores", JSON.stringify(scores))
            return
        }

        const minIdx = scores.indexOf(Math.min(...scores))

        if (scores[minIdx]<this.score.score){
            scores[minIdx] = this.score.score
            localStorage.setItem("scores", JSON.stringify(scores))
        }
    }
}
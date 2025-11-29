export default class Bird {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.fallspeed = 0.1
        this.rotation = 0

        this.time = 0

        this.imagePaths = [
            "assets/Flappy Bird/yellowbird-upflap.png",
            "assets/Flappy Bird/yellowbird-midflap.png",
            "assets/Flappy Bird/yellowbird-downflap.png",
            "assets/Flappy Bird/yellowbird-midflap.png"
        ]

        this.images = new Array()

        this.imagePaths.forEach(path=>{
            const img = document.createElement("img")
            img.src = path
            this.images.push(img)
        })

        this.jumpSound = new Audio("assets/Sound Efects/wing.wav")
    }

    draw(ctx) {

        const birdCanvas = document.createElement("canvas")
        const birdCtx = birdCanvas.getContext("2d")

        birdCanvas.width = 50
        birdCanvas.height = 50

        // birdCtx.beginPath();
        // birdCtx.rect(0, 0, 50, 50);
        // birdCtx.stroke();

        birdCtx.translate(25,25)
        birdCtx.rotate(this.rotation)
        

        birdCtx.drawImage(this.images[Math.floor(this.time/10)%4], -17, -12)

        ctx.drawImage(birdCanvas, this.x-17, this.y-12)


        // ctx.drawImage(this.images[Math.floor(this.time/10)%4], this.x-14, this.y-12)

        this.time+=1
    }

    fall() {
        this.y += this.fallspeed
        this.rotation += this.fallspeed/100
        this.fallspeed += 0.2
    }

    jump() {
        this.rotation = 0
        this.fallspeed = -4
        this.jumpSound.play()
    }

    getX = () => this.x
    getY = () => this.y
}
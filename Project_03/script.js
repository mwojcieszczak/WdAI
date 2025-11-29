
import Board from './Board.js';
import Start from './Start.js';

window.onload = () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    const clear = () => ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)


    const board = new Board()
    const start = new Start()

    const startScreen= () =>{
        clear()
        board.reset()
        board.draw(ctx)
        start.draw(ctx)
        window.onclick = startGame
    }

    setTimeout(startScreen, 500)

    const startGame = () =>{
        window.onclick = () =>{board.bird.jump()}
        let requestId

        const drawFrame = () => {
            clear()
            const stop = board.draw(ctx)

            if (stop) {
                window.onclick = startScreen
                return
            }

            requestId = requestAnimationFrame(drawFrame)
        }

        requestId = requestAnimationFrame(drawFrame)

    }
}
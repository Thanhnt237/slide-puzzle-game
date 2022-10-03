function Main(){
    this.context = null;
    this.game = null
    this.gameMatrix = null;

    this.init = () => {
        this.createCanvas()
        this.createGamePlay()
        this.createGameBoard()
    }

    this.createGamePlay = () => {
        const game = new GamePlay()
        game.init()
        this.game = game;
        this.gameMatrix = game.getGameMatrix()
    }

    this.createCanvas = () => {
        let canvas = document.createElement('canvas')
        this.context = canvas.getContext('2d')
        canvas.width = CANVAS_WIDTH
        canvas.height = CANVAS_HEIGHT

        document.body.appendChild(canvas)
    }

    this.createGameBoard = () => {
        let board = new Board(this.context, this.gameMatrix);
        board.init();
    }
}

let main = new Main()
main.init()
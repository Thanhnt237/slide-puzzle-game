function Main(){
    this.context = null;
    this.game = null;
    this.eventHandler = null;
    this.board = null;
    this.gameMatrix = null;

    this.init = () => {
        this.createCanvas()
        this.createGamePlay()
        this.createGameBoard()
        this.createEventHandler()

        this.startGame()
        this.testThing()
    }

    this.createGamePlay = () => {
        const game = new GamePlay()
        game.init()
        this.game = game
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
        this.board = board;
    }

    this.createEventHandler = () => {
        let event = new EventHandler(this.game, this.board)
        event.init();
        this.eventHandler = event
    }

    this.startGame = () => {
        let buttonStartGame = document.getElementById('GameStart')
        buttonStartGame.addEventListener('click', this.handleStartGame)
    }

    this.handleStartGame = () => {
        const game = new GamePlay(this.gameMatrix, this.board, this.eventHandler)
        alert("Let's Rock!")
        this.game = game;
        game.startNewGame()
    }

    this.testThing = () => {
        let buttonGameRestart = document.getElementById('GameRestart')
        let buttonGameReset = document.getElementById('GameReset')
        let buttonGameOver = document.getElementById('GameOver')

        buttonGameRestart.addEventListener('click', () => this.game.startNewGame())
        buttonGameReset.addEventListener('click', () => this.board.resetGameBoard(this.gameMatrix, this.eventHandler))
        buttonGameOver.addEventListener('click', () => this.game.letGameOver())
    }
}

let main = new Main()
main.init()
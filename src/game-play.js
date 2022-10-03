function GamePlay() {
    this.gameMatrix = null;

    this.init = () => {
        this.gameMatrix = this.createGameMatrix()
        this.createGameHandleEvent()
    }

    this.getGameMatrix = () => this.gameMatrix

    this.createGameMatrix = () => {
        let gameMatrix = []

        for (let i = 0; i < GAME_HEIGHT_GRID; i++) {
            let rowGameMatrix = []
            for (let j = 0; j < GAME_WIDTH_GRID; j++) {
                rowGameMatrix.push('x')
            }
            gameMatrix.push(rowGameMatrix)
        }

        gameMatrix[0] = ['o', '-', '-']
        return gameMatrix
    }

    this.startGame = () => {

    }

    this.createGameLoop = () => {

    }

    this.createGameHandleEvent = () => {
        document.onkeydown = (e) => this.handlePressKey(e)
    }

    this.handlePressKey = (e) => {
        switch (e.keyCode){
            case 37:
                console.log("left key press")
                break;
            case 38:
                console.log('up key press')
                break;
            case 39:
                console.log('right key press')
                break;
            case 40:
                console.log('down key press')
                break;
            case 13:
                this.startGame()
                break;
        }
    }


}
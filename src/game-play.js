function GamePlay(gameMatrix, gameBoard) {
    this.gameMatrix = gameMatrix;
    this.currentGameMatrix = gameMatrix;
    this.board = gameBoard;
    this.gameOver = false;
    this.gameMatrixLength = 0;
    this.gameStore = null;
    this.gamePause = false;

    this.init = () => {
        this.gameMatrix = this.createGameMatrix()
        console.log(this.gameMatrix)
        // this.gameStore = new Store()
    }

    this.getGameMatrix = () => this.gameMatrix

    this.createGameMatrix = () => {
        let gameMatrix = []
        let index = 1;

        for (let i = 0; i < GAME_HEIGHT_GRID; i++) {
            let rowGameMatrix = []
            for (let j = 0; j < GAME_WIDTH_GRID; j++) {
                rowGameMatrix.push([index, i, j])
                index++;
            }
            gameMatrix.push(rowGameMatrix)
        }

        for (let i = 0; i < gameMatrix[0].length; i++) {
            if(i === 0) {
                gameMatrix[0][i] = 'o'
            }else{
                gameMatrix[0][i] = '-'
            }
        }

        // this.gameStore.storeGameMatrix(gameMatrix)
        return gameMatrix
    }

    this.sufferGameMatrix = (gameMatrix) => {
        let myGameMatrix = [
            ["o","-","-"],
            [[4, 1,0], [5,1,1], [8,2,1]],
            [[12,3,2],[6,1,2] , [16,5,0]],
            [[10,3,0], [13,4,0], [7,2,0]],
            [[11,3,1], [14,4,1], [18,5,2]],
            [[15,4,2], [17,5,1], [9,2,2]]
        ]
        // let myGameMatrix = JSON.parse(JSON.stringify(gameMatrix));

        // let randomArray = Array.from(Array((GAME_WIDTH_GRID * (GAME_HEIGHT_GRID - 1) + GAME_WIDTH_GRID + 1)).keys())
        // randomArray = randomArray.slice(GAME_WIDTH_GRID + 1)
        // // console.log(randomArray)
        //
        // for (let i = 0; i < myGameMatrix.length; i++) {
        //     for (let j = 0; j < myGameMatrix[i].length; j++) {
        //         let somethingRandom = Math.floor(Math.random() * (randomArray[randomArray.length-1] - randomArray[0] + 1) + randomArray[0])
        //         let yRandom = somethingRandom % GAME_WIDTH_GRID
        //         let xRandom = (somethingRandom - yRandom) / GAME_WIDTH_GRID
        //         // console.log(somethingRandom)
        //         console.log("xRandom", xRandom, "yRandom", yRandom)
        //         myGameMatrix[i][j] = JSON.parse(JSON.stringify(gameMatrix[xRandom][yRandom]))
        //
        //         randomArray = this.removeShufflerKeys(randomArray, xRandom)
        //     }
        // }
        //
        // console.log(myGameMatrix)

        return myGameMatrix;
    }

    this.removeShufflerKeys = (array, removeItem) => {
        let myArray = JSON.parse(JSON.stringify(array))
        const index = myArray.indexOf(removeItem);
        if (index > -1) {
            myArray.splice(index, 1);
        }
        return myArray
    }

    this.startNewGame = () => {
        this.createGameHandleEvent()
        this.currentGameMatrix = this.sufferGameMatrix(this.gameMatrix)
        console.log(this.currentGameMatrix)
        this.board.updateGameBoard(this.currentGameMatrix)
    }

    this.CheckGameOver = () => {
        if(JSON.stringify(this.gameMatrix) === JSON.stringify(this.currentGameMatrix)) {
            console.log("Game Over!")
        }
    }

    this.createGameHandleEvent = () => {
        document.onkeydown = (e) => this.handlePressKey(e)
    }

    this.handlePressKey = (e) => {
        switch (e.keyCode){
            case 37:
                this.handleCheckMatrix('left')
                break;
            case 38:
                this.handleCheckMatrix('up')
                break;
            case 39:
                this.handleCheckMatrix('right')
                break;
            case 40:
                this.handleCheckMatrix('down')
                break;
        }
    }

    this.handleCheckMatrix = (direction) => {
        let xIndex = 0;
        let yIndex = 0;

        for (let i = 0; i < this.currentGameMatrix.length; i++) {
            let index = this.currentGameMatrix[i].findIndex(item => item === 'o')
            if(index !== -1){
                xIndex = i;
                yIndex = index
            }
        }

        this.handleMoveDirection(direction, xIndex, yIndex)
    }

    this.handleMoveDirection = (direction, xIndex, yIndex) => {
        console.log("Orange location ", xIndex, yIndex)
        switch (direction){
            case 'left':
                this.handleMoveLeft(xIndex, yIndex)
                break;
            case 'up':
                this.handleMoveUp(xIndex, yIndex)
                break;
            case 'right':
                this.handleMoveRight(xIndex, yIndex)
                break;
            case 'down':
                this.handleMoveDown(xIndex, yIndex)
                break;
        }
    }

    this.handleMoveLeft = (i, j) => {
        if(
            !this.gamePause &&
            !this.gameOver &&
            this.currentGameMatrix[i] &&
            this.currentGameMatrix[i][j-1] &&
            this.currentGameMatrix[i][j-1] !== '-'
        ){
            let temp = JSON.parse(JSON.stringify(this.currentGameMatrix[i][j-1]))
            this.currentGameMatrix[i][j-1] = 'o'
            this.currentGameMatrix[i][j] = temp
            this.board.updateGameBoard(this.currentGameMatrix)
            this.CheckGameOver()
        }
    }

    this.handleMoveRight = (i, j) => {
        if(
            !this.gamePause &&
            !this.gameOver &&
            this.currentGameMatrix[i] &&
            this.currentGameMatrix[i][j+1] &&
            this.currentGameMatrix[i][j+1] !== '-'
        ){
            let temp = JSON.parse(JSON.stringify(this.currentGameMatrix[i][j+1]))
            this.currentGameMatrix[i][j+1] = 'o'
            this.currentGameMatrix[i][j] = temp
            this.board.updateGameBoard(this.currentGameMatrix)
            this.CheckGameOver()
        }
    }

    this.handleMoveUp = (i, j) => {
        if(
            !this.gamePause &&
            !this.gameOver &&
            this.currentGameMatrix[i-1] &&
            this.currentGameMatrix[i-1][j] &&
            this.currentGameMatrix[i-1][j] !== '-'
        ){
            let temp = JSON.parse(JSON.stringify(this.currentGameMatrix[i-1][j]))
            this.currentGameMatrix[i-1][j] = 'o'
            this.currentGameMatrix[i][j] = temp
            this.board.updateGameBoard(this.currentGameMatrix)
            this.CheckGameOver()
        }
    }

    this.handleMoveDown = (i, j) => {
        if(
            !this.gamePause &&
            !this.gameOver &&
            this.currentGameMatrix[i+1] &&
            this.currentGameMatrix[i+1][j] &&
            this.currentGameMatrix[i+1][j] !== '-'
        ){
            let temp = JSON.parse(JSON.stringify(this.currentGameMatrix[i+1][j]))
            this.currentGameMatrix[i+1][j] = 'o'
            this.currentGameMatrix[i][j] = temp
            this.board.updateGameBoard(this.currentGameMatrix)
            this.CheckGameOver()
        }
    }

}
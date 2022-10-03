function Board(context, gameMatrix) {
    this.context = context
    this.gameMatrix = gameMatrix;
    this.imageContext = null;

    this.init = () => {
        this.drawGameBoard()
    }

    this.updateGameBoard = (gameMatrix) => {
        this.drawGameBoard(gameMatrix)
    }

    this.drawGameBoard = (gameMatrix = this.gameMatrix) => {
        let puzzle = new Puzzle(this.context)
        puzzle.init();

        this.imageContext = puzzle.getImageContext()

        this.imageContext.onload = () => {
            for (let i = 0; i < gameMatrix?.length; i++) {
                for (let j = 0; j < gameMatrix[i]?.length; j++) {
                    switch (gameMatrix[i][j]){
                        case 'o':
                            puzzle.drawEmpty(j*PUZZLE_WIDTH, i*PUZZLE_HEIGHT)
                            break;
                        case '-':
                            puzzle.drawBlock(j*PUZZLE_WIDTH, i*PUZZLE_HEIGHT)
                            break;
                        default:
                            puzzle.drawPuzzle(j*PUZZLE_WIDTH, i*PUZZLE_HEIGHT, gameMatrix[i][j], this.imageContext)
                            break;
                    }
                }
            }
        }
    }
}
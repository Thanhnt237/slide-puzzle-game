function Board(context, gameMatrix) {
    this.context = context
    this.gameMatrix = gameMatrix;

    this.init = () => {
        this.drawGameBoard()
    }

    this.updateGameBoard = () => {

    }

    this.drawGameBoard = () => {
        console.log(this.gameMatrix)

        let puzzle = new Puzzle(this.context)
        for (let i = 0; i < this.gameMatrix?.length; i++) {
            for (let j = 0; j < this.gameMatrix[i]?.length; j++) {
                switch (this.gameMatrix[i][j]){
                    case 'x':
                        puzzle.drawPuzzle(j*PUZZLE_WIDTH, i*PUZZLE_HEIGHT)
                        break;
                    case 'o':
                        puzzle.drawPuzzle(j*PUZZLE_WIDTH, i*PUZZLE_HEIGHT, 'green')
                        break;
                    case '-':
                        puzzle.drawPuzzle(j*PUZZLE_WIDTH, i*PUZZLE_HEIGHT, 'red')
                        break;
                }
            }
        }
    }
}
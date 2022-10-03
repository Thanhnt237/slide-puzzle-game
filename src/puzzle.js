function Puzzle(context) {
    this.context = context
    this.imageContext = null;

    this.init = () => {
        this.initImage()
    }

    this.getImageContext = () => this.imageContext

    this.drawPuzzle = (xAxis = 0, yAxis = 0, puzzleMatrix, imageContext) => {
        let [index, i, j] = puzzleMatrix
        this.context.drawImage(
            imageContext,
            j*PUZZLE_WIDTH,
            i*PUZZLE_HEIGHT,
            PUZZLE_WIDTH - GUTTER,
            PUZZLE_HEIGHT - GUTTER,
            xAxis,
            yAxis,
            PUZZLE_WIDTH - GUTTER,
            PUZZLE_HEIGHT - GUTTER
        )
    }

    this.drawEmpty = (xAxis = 0, yAxis = 0, color = 'orange') => {
        this.context.fillStyle = color
        this.context.fillRect(xAxis, yAxis, PUZZLE_WIDTH - GUTTER, PUZZLE_HEIGHT - GUTTER)
    }

    this.drawBlock = (xAxis = 0, yAxis = 0, color = 'red') => {
        this.context.fillStyle = color
        this.context.fillRect(xAxis, yAxis, PUZZLE_WIDTH - GUTTER, PUZZLE_HEIGHT - GUTTER)
    }

    this.initImage = () => {
        if(!this.imageContext){
            this.imageContext = new Image();
            this.imageContext.src =  IMAGE_SOURCE;
            this.imageContext.width = 300
            this.imageContext.height = 300
        }
    }

    this.drawBackground = () => {
        this.imageContext.onload = () => {
            // this.context.drawImage(this.imageContext, 800, 800, PUZZLE_WIDTH - GUTTER, PUZZLE_HEIGHT - GUTTER, 100, 100, 100, 100)
        }
    }
}
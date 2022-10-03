function Puzzle(context) {
    this.context = context

    this.init = () => {

    }

    this.drawPuzzle = (xAxis = 0, yAxis = 0, color = 'black') => {
        this.context.fillStyle = color
        this.context.fillRect(xAxis, yAxis, PUZZLE_WIDTH - GUTTER, PUZZLE_HEIGHT - GUTTER)
    }
}
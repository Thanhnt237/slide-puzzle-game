function EventHandler(game, board) {
    this.game = game;
    this.board = board;

    this.init = () => {
        this.listen()
    }

    this.listen = (message) => {
        document.addEventListener(message, this.messageHandler)
    }

    this.messageHandler = (message) => {
        switch (message){
            case GAME_START:
                this.game.startNewGame()
                break;
            case RESET:
                this.board.resetGameBoard()
                break;
            case PAUSE:
                this.game.handleGamePause()
                break;
        }
    }

    this.emit = (event = 'Fack') => {
        if (window.ReactNativeWebView){
            window.ReactNativeWebView.postMessage(event);
        }
    }


}
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
                document.getElementById('GameStart').click()
                break;
            case RESET:
                document.getElementById('GameReset').click()
                break;
            case PAUSE:
                document.getElementById('GamePause').click()
                break;
        }
    }

    this.emit = (event = 'Fack') => {
        if (window.ReactNativeWebView){
            window.ReactNativeWebView.postMessage(event);
        }
    }


}
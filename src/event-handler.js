function EventHandler() {

    this.init = () => {
        this.listen()
    }

    this.listen = (message) => {
        document.addEventListener(message, this.messageHandler)
    }

    this.messageHandler = () => {

    }

    this.emit = (event = 'Fack') => {
        if (window.ReactNativeWebView){
            window.ReactNativeWebView.postMessage(event);
        }
    }


}
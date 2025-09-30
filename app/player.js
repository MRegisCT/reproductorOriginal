import audioController from "../domain/audio_controller";

const player = {
    _last: document.getElementById("lastest"), 
    _next: document.getElementById("forward"), 
    _play: document.getElementById("play"),
    _controller: audioController,
    initializaPlayer(){
        this._last.addEventListener('click', this._controller.netSong);
        this._next.addEventListener('click', this._controller.netSong)
    }
}
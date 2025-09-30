import createPlaylist from "../utils/playlist";

const audioOntroller = {
    _nextSong: [],
    _lastSong: [],
    _actualSong: null, 
    _progress_bar: document.getElementById("progress"), 
    _controller: document.getElementById("media"), 
    initializePlayer(playlist){
        this._nextSong = playlist;

        this._controller.addEventListener("timeupdate", function(){
            player._progress_bar.value = (this.currentTime/this.duration)*100;
        });
        this.progress_bar.addEventListener('input', function(){
            audioOntroller._controller.currentTime = (this.value/100)* audioOntroller._controller.duration;
        })
    }
}

export default audioController;
import createPlaylist from "./utils/playlist.js";
import audioController from "./domain/audio_controller.js";

let play_btn = document.getElementById("play");
const song_img = document.getElementById("song-img");
const lastest = document.getElementById("lastest");
const forward = document.getElementById("forward")

const songs = [
        {
            song_name : "cancion CHIDA",
            artist_name: "artista 1",
            song_url: "./media/song.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 2",
            artist_name: "artista 1",
            song_url: "./media/song_2.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 3",
            artist_name: "artista 3",
            song_url: "./media/song_3.mp3",
            caratula: "https://picsum.photos/200"
        },
    ];

const last = [];

const playlist = createPlaylist(songs.length);

let playingNow;

window.addEventListener('DOMContentLoaded', () => {
    audioController.initializaPlayer
    loadSong(playingNow);
})

function loadSong(i){
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");

    const now = songs[i];

    media.src = now.song_url;
    title.innerText = now.song_name;
    artist.innerText = now.artist_name;
    song_img.src = now.caratula;
}


lastest.addEventListener('click', function(){
    if(!last.length == 0){
        playlist.push(playingNow);
        playingNow = last.pop();
        loadSong(playingNow)
    }
});
forward.addEventListener('click', function(){
    if(!playlist.length == 0){
        last.push(playingNow);
        playingNow = playlist.pop();
        loadSong(playingNow)
    }
});

progress_bar.oninput = function() {
    media.currentTime = (this.value/100) * media.duration;
}

play_btn.addEventListener("click", playPause);

function playPause(){
    if(play_btn.classList.contains("pause")){
        media.pause();
        play_btn.classList.remove("pause");
        play_btn.classList.add("play");
        play_btn.innerText = "Play"
    }else{
        media.play();
        play_btn.classList.remove("play");
        play_btn.classList.add("pause");
        play_btn.innerText = "Pause";
    }
}


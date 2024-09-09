console.log("Welcome to my Spotify")
let songIndex = 0
let audioElement = new Audio("songs/1.mp3");
let playButton = document.querySelector("#play")
let songProgress = document.querySelector("#songProgress")
let Timestamp = document.querySelector("timeStamp")
let songlist = Array.from(document.querySelectorAll(".song"))
let previous = document.querySelector("#previous")
let next = document.querySelector("#next")
let songListButton = Array.from(document.querySelectorAll(".songListButton"))
let timeStamp=document.querySelector(".timeStamp")
let songInfo=document.querySelector(".songInfo")
let gif=document.querySelector(".gif")
var songs = [
    { songName: "Pushpa Pushpa (From Pushpa 2 The Rule) [Hindi] | Devi Sri Prasad | Mika Singh", path: "songs/1.mp3", cover: "covers/1.jpg"},
    { songName: "Garmi Song | Badshah | Street Dancer 3D | गर्मी", path: "songs/2.mp3", cover: "covers/2.jpg" },
    { songName: "Illegal Weapon 2.0 Song | Jasmine Sandlas | Street Dancer 3D", path: "songs/3.mp3", cover: "covers/3.jpg" },
    { songName: "Sanak Song | Badshah | Supreme Hits | सनक", path: "songs/4.mp3", cover: "covers/4.jpg" },
    { songName: "Believer(PaglaSongs)", path: "songs/5.mp3", cover: "covers/beleiver.jpg" },
    { songName: "Let-Me-Down-Slowly-x-Main-Dhoondne-Ko(PaglaSongs)", path: "songs/6.mp3", cover: "covers/let me.jpg" },
    { songName: "Moye-Moye(PaglaSongs)", path: "songs/7.mp3", cover: "covers/moye more.jpg" },
    { songName: "O-Sajni-Re(PaglaSongs)", path: "songs/8.mp3", cover: "covers/sajni re.jpg" },
    { songName: "Satisfya(PaglaSongs)", path: "songs/9.mp3", cover: "covers/satifya.jpg" },
    { songName: "Tera_Fitoor_-_Genius", path: "songs/10.mp3", cover: "covers/tu h kaha.jpg" },
    { songName: "Unstoppable(PaglaSongs)", path: "songs/11.mp3", cover: "covers/unstopable.jpg" },
]
songlist.forEach((ele, i) => {
    ele.getElementsByTagName("img")[0].src = songs[i].cover;
    ele.getElementsByClassName("songItem")[0].innerText = songs[i].songName;
})

playButton.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        songInfo.innerText=songs[songIndex].songName
        gif.style.opacity="0"
        playButton.classList.remove("fa-play-circle")
        playButton.classList.add("fa-pause-circle")
        songListPlay()
    } else {
        audioElement.pause()
        playButton.classList.remove("fa-pause-circle")
        playButton.classList.add("fa-play-circle")
        makeAllPlay()
    }
    
})
audioElement.addEventListener("timeupdate", () => {
    songProgress.value = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    timeStamp.innerText=`${(audioElement.currentTime/60).toFixed(2)}/${(audioElement.duration/60).toFixed(2)}`
})

songProgress.addEventListener("change", () => {
    audioElement.currentTime = (audioElement.duration * songProgress.value) / 100;
    timeStamp.innerText=`${(audioElement.currentTime/60).toFixed(2)}/${((audioElement.duration)/60).toFixed(2)}`
})

previous.addEventListener("click", () => {

})
const makeAllPlay = () => {
    songListButton.forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}
songListButton.forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlay()
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        for (ele of Array.from(element.classList)) {
            if (ele == "fa-circle-play" || audioElement.currentTime <= 0) {
                audioElement.play()
                songInfo.innerText=songs[songIndex].songName
                element.classList.remove("fa-circle-play");
                element.classList.add("fa-circle-pause");
                playButton.classList.remove("fa-play-circle")
                playButton.classList.add("fa-pause-circle")
            }
        }
    })
})

previous.addEventListener("click", () => {
    if(songIndex<=0){
        songIndex=0
    }else{
    songIndex -=1
    }
    songInfo.innerText=songs[songIndex].songName
    makeAllPlay()
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.play()
    playButton.classList.remove("fa-play-circle")
    playButton.classList.add("fa-pause-circle")
    songListPlay()
})
next.addEventListener("click", () => {
    if(songIndex<4){
        songIndex += 1
  
    }else{
        songIndex=0
    }
    songInfo.innerText=songs[songIndex].songName
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    
    audioElement.play()    
    makeAllPlay()      
    playButton.classList.remove("fa-play-circle")
    playButton.classList.add("fa-pause-circle")
    songListPlay()
})

const songListPlay=()=>{
    let ele=document.getElementById(`${songIndex}`)
        ele.classList.remove("fa-circle-play")
        ele.classList.add("fa-circle-pause")
        
}

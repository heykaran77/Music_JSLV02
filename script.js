var arr = [
  {
    songName: "Ashe - Moral of the Story",
    url: "./songs/Ashe - Moral of the Story.mp3",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/88/d2/fb/88d2fbd6-f886-88a7-f07f-8e72678323a9/3357.jpg/600x600bf-60.jpg",
  },
  {
    songName: "JVKE - golden hour",
    url: "./songs/JVKE - golden hour (Lyrics)_256k.mp3",
    img: "https://i.scdn.co/image/ab67616d0000b273134d5ec418af466391502905",
  },
  {
    songName: "Ginseng Strip",
    url: "./songs/Ginseng Strip.m4a",
    img: "https://c.saavncdn.com/035/Ginseng-Strip-But-It-s-Lofi-Ok-Unknown-2023-20240804150755-500x500.jpg",
  },
  {
    songName: "Rauf & Faik - я люблю тебя давно",
    url: "./songs/Rauf & Faik - я люблю тебя давно.mp3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TtZtiTHD5csDeep0izDHWTJ3Ux85q2fq3A&s",
  },
];

var allSongs = document.querySelector("#all-songs");
var audio = new Audio();
var currentSong = 0;
var albumImg = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

function showSongs() {
  var clutter = "";
  arr.forEach((song, idx) => {
    clutter += `<div class="song-card" id=${idx}>
        <div class="part1">
            <img src=${song.img} alt="">
            <h2>${song.songName}</h2>
        </div>
        <h6>3:56</h6>
    </div>`;
  });

  allSongs.innerHTML = clutter;
  audio.src = arr[currentSong].url;
  albumImg.style.backgroundImage = `url(${arr[currentSong].img})`;
}
showSongs();

allSongs.addEventListener("click", (e) => {
  currentSong = e.target.id;
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  showSongs();
  audio.play();
});

var flag = 0;
play.addEventListener("click", () => {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    audio.play();
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    flag = 0;
    audio.pause();
  }
});

forward.addEventListener("click", () => {
  if (currentSong < arr.length - 1) {
    currentSong++;
    showSongs();
    audio.play();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    forward.style.opacity = 1;
  } else {
    forward.style.opacity = 0.4;
  }
});

backward.addEventListener("click", () => {
  if (currentSong > 0) {
    currentSong--;
    showSongs();
    audio.play();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    backward.style.opacity = 1;
  } else {
    backward.style.opacity = 0.4;
  }
});

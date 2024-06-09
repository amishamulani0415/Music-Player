const songs = [
    {
        name: "I'll Be There For You",
        artist: "The Rembrandts",
        image: "Image/album1.jpg",
        audio: "Music/music1.mp3"
    },
    {
        name: " Until I Found You",
        artist: "Stephen Sanchez",
        image: "Image/album2.jpg",
        audio: "Music/music2.mp3"
    },
    {
        name: "The Night We Met",
        artist: "Lord Huron",
        image: "Image/album3.jpg",
        audio: "Music/music3.mp3"
    },
    {
        name: "We Fell In Love In October",
        artist: "Girl in Red",
        image: "Image/album4.jpg",
        audio: "Music/music4.mp3"
    },
    {
      name: "Say You Won't Let Go",
      artist: "James Arthur",
      image: "Image/album5.jpg",
      audio: "Music/music5.mp3"
    }
    // Add more songs as needed
  ];
  
  let currentSongIndex = 0;
  const audio = new Audio();
  const albumArt = document.getElementById("albumArt");
  const songName = document.getElementById("songName");
  const artist = document.getElementById("artist");
  const playPauseButton = document.getElementById("playPauseButton");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const progressBar = document.getElementById("progressBar");
  
  function loadSong(songIndex) {
    const song = songs[songIndex];
    audio.src = song.audio;
    albumArt.src = song.image;
    songName.textContent = song.name;
    artist.textContent = song.artist;
  }
  
  function playPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.innerHTML = '<i class="ri-pause-large-fill"></i>';
    } else {
      audio.pause();
      playPauseButton.innerHTML = '<i class="ri-play-large-fill">';
    }Play
  }
  
  function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = '<i class="ri-pause-large-fill"></i>';
  }
  
  function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = '<i class="ri-pause-large-fill"></i>';
  }
  
  playPauseButton.addEventListener("click", playPause);
  nextButton.addEventListener("click", playNextSong);
  prevButton.addEventListener("click", playPreviousSong);
  
  loadSong(currentSongIndex);

function updateProgressBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;
  }
  
  function setPlaybackTime(event) {
    const selectedTime = event.target.value;
    const duration = audio.duration;
    const newTime = (selectedTime / 100) * duration;
    audio.currentTime = newTime;
  }
  
  audio.addEventListener("timeupdate", updateProgressBar);
  progressBar.addEventListener("input", setPlaybackTime);

  function updateProgressBar(event) {
    const clickedX = event.offsetX;
    const barWidth = progressBar.clientWidth;
    const duration = audio.duration;
    const newTime = (clickedX / barWidth) * duration;
    audio.currentTime = newTime;
  }
  
  audio.addEventListener("timeupdate", function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    progressBar.value = progress;
  });
  
  progress
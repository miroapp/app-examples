/* globals io, miro, YT */

const socket = io();

// joining room with board id
miro.board.getInfo().then((info) => {
  const boardId = info.id;
  socket.emit("joinRoom", boardId);
  console.log(`Joining room ${boardId}`);
});

const submit = document.getElementById("submit");
const linkInput = document.getElementById("link-input");
const pushVideoButton = document.getElementById("push-video");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (linkInput.value) {
    player.cueVideoById(youtubeParser(linkInput.value));
  }
});

pushVideoButton.addEventListener("click", function () {
  socket.emit("command", { command: `open` });
});

// This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
let player;

let youtubeId = "_HTZFf8bkNI";

window.onYouTubePlayerAPIReady = function () {
  onYouTubePlayer();
};

/**
 * Initialises a new Youtube Iframe.
 */
function onYouTubePlayer() {
  console.log("Youtube Iframe Ready");
  player = new YT.Player("player", {
    height: "390",
    width: "100%",
    videoId: "_HTZFf8bkNI",
    align: "middle",
    playerVars: {
      playsinline: 1,
    },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

/**
 * The Youtube Iframe API calls this function when the player's state changes.
 * Depending on the state, it will broadcast corresponding command to the room.
 * @param {string} event - integer for state, each state documented below.
 */
function onPlayerStateChange(event) {
  console.log(event);
  const playerState = event.data;
  const time = player.getCurrentTime();
  switch (playerState) {
    case -1:
      // unstarted
      console.log("video unstarted");
      break;
    case 1:
      // playing
      console.log("video playing");
      socket.emit("command", { command: "play" });
      socket.emit("command", { command: `seek ${time}` });
      break;
    case 2:
      // paused
      console.log("video paused");
      socket.emit("command", { command: "pause" });
      break;
    case 3:
      // buffering
      console.log("seeking");
      socket.emit("command", { command: `seek ${time}` });
      break;
    case 5:
      // queued
      console.log("video queued");
      youtubeId = youtubeParser(linkInput.value);
      socket.emit("command", { command: `cue ${youtubeId}` });
      break;
  }
}

/**
 * Returns the video id from various forms of youtube links
 * https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
 * @param {string} url Youtube url
 * @return {string} sanitised Youtube video id
 */
function youtubeParser(url) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

// Participant App is requesting status
socket.on("respond", function (msg) {
  const socketId = msg.socketId;
  const request = msg.request;
  console.log(`${socketId} requesting ${request}`);
  if (request == "status") {
    const time = player.getCurrentTime();
    socket.emit("direct-command", {
      socketId: socketId,
      command: `sync ${youtubeId} ${time}`,
    });
  }
});

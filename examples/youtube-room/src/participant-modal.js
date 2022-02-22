/* globals io, miro, YT */

// Socket IO and variable initialization
const socket = io();
let videoId = "";
let player;
let time;

// joining room with board id
miro.board.getInfo().then((info) => {
  const boardId = info.id;
  socket.emit("joinRoom", boardId);
  console.log(`Joining room ${boardId}`);
});

//  This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubePlayerAPIReady = function () {
  onYouTubePlayer();
};

/**
 * Initialises a new Youtube Iframe.
 */
function onYouTubePlayer() {
  player = new YT.Player("player", {
    height: "505",
    width: "853",
    videoId: videoId,
    playerVars: {
      playsinline: 1,
      mute: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

/**
 * Called when player iframe is ready.
 * Requests current status from facilitator.
 */
function onPlayerReady() {
  socket.emit("request", { request: `status` });
}

/**
 * Executes commands received from facilitator
 */
socket.on("execute", function (msg) {
  if (msg.includes("play")) {
    player.playVideo();
  }

  if (msg.includes("pause")) {
    player.pauseVideo();
  }

  if (msg.includes("seek")) {
    time = msg.split(" ")[1];
    player.seekTo(time);
  }

  if (msg.includes("cue")) {
    videoId = msg.split(" ")[1];
    player.cueVideoById(videoId);
  }

  if (msg.includes("sync")) {
    videoId = msg.split(" ")[1];
    time = msg.split(" ")[2];
    player.loadVideoById(videoId, time);
  }
});

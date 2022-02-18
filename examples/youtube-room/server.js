const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/facilitator", (req, res) => {
  res.sendFile(__dirname + "/facilitator.html");
});

app.get("/facilitator-modal", (req, res) => {
  res.sendFile(__dirname + "/facilitator-modal.html");
});

app.get("/participant", (req, res) => {
  res.sendFile(__dirname + "/participant.html");
});

app.get("/participant-modal", (req, res) => {
  res.sendFile(__dirname + "/participant-modal.html");
});

app.use("/src", express.static(path.join(__dirname, "src")));

io.on("connection", (socket) => {
  socket.on("joinRoom", (msg) => {
    console.log(`<socket server> client joining ${msg}`);
    socket.join(msg);
  });

  socket.on("command", (msg) => {
    const command = msg.command;
    const rooms = Array.from(socket.rooms);
    console.log(`<socket server> command msg ${msg.command} to ${rooms}`);
    rooms.map((room) => io.to(room).emit("execute", command));
  });

  socket.on("direct-command", (msg) => {
    const command = msg.command;
    const socketId = msg.socketId;
    console.log(`<socket server> direct command msg ${command} to ${socketId}`);
    io.to(socketId).emit("execute", command);
  });

  socket.on("request", (msg) => {
    const request = msg.request;
    const socketId = socket.id;
    console.log(`<socket server> ${socketId} requesting ${request}`);
    const rooms = Array.from(socket.rooms);
    rooms.map((room) =>
      io.to(room).emit("respond", { socketId: socketId, request: request })
    );
  });
});

http.listen(port, () => {
  console.log(`youtube-room server running on port ${port}/`);
});

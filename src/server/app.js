const express = require('express');
const http = require('http');
const socketIo = require("socket.io");
const ChartList = require('./models/Chart');

const port = process.env.PORT || 8080;
const index = require('./routes/index');

const app = express();

app.use(express.static('dist'));
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

const chartList = new ChartList();

io.on("connection", (socket) => {
  console.log("New client connected");

  const emitPointsUpdate = () => {
    const response = JSON.stringify(chartList);
    io.emit("return points", response);
  }

  socket.on("add random point", () => {
    chartList.pushRandomEntry();
    emitPointsUpdate();
  });

  socket.on("load points", emitPointsUpdate);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));
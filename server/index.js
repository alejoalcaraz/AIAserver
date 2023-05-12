const WebSocket = require("ws");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

const wss = new WebSocket.Server({ port: PORT });

console.log("tiki");

wss.on("connection", ws => {

    console.log("New client connected");

    ws.on("close", () => {
        console.log("Client has disconnected");
    });
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
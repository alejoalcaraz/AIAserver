const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();




router.get('/', (req, res) => {
  const WebSocket = require('ws')
  const PORT = process.env.PORT || 3000;
  const wss = new WebSocket.Server({ port: PORT });
  console.log(PORT);
  wss.on('connection', ws => {
    ws.on('message', message => {
      console.log(`Received message => ${message}`)
    })
    ws.send('Hello! Message From Server!!')
  });
});

app.use('/.netlify/functions/index', router);
module.exports.handler = serverless(app);
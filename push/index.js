const webPush = require('web-push');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const { publicKey, privateKey } = webPush.generateVAPIDKeys();

webPush.setVapidDetails(
  'localhost:8080',
  publicKey,
  privateKey
);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/public-key', (req, res) => {
  res.send(publicKey)
});

app.post('/send-notif', (req, res) => {
  setTimeout(() => {
    webPush.sendNotification(req.body.subscription, null)
      .then(() => {
        res.sendStatus(201);
      });
  }, 3000);
});

app.listen(8080);

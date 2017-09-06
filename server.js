const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const util = require('util');
const mime = require('mime');
const app = express();
const gm = require('gm');

app.listen(3002);
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '500mb' }));

// Listen to a POST request from the take photo button
app.post('/memes', (req, res) => {
  let picData = req.body.canvas.replace('data:image/png;base64,', '');
  let memePath = `/home/mc/garage_script/public/memes/${req.body.name}.png`;

  // Write the message on the pic & add the pic into a folder called memes
  fs.writeFile(memePath, picData, 'base64', () => {
    gm(memePath).fontSize(40).drawText(50, 50, req.body.message).write(memePath, (err) => {
      console.log('Meme Error: ', err);
    });
  });
  res.send('Meme success!');
});

/* Get meme image data every second */
app.post('/memeData', (req, res) => {
  const base64Image = (src) => {
    var data = fs.readFileSync(`/home/mc/garage_script/public/memes/${src}`).toString('base64');
    return util.format('data:%s;base64,%s', mime.lookup(`/home/mc/garage_script/public/memes/${src}`), data);
  };
  res.send(base64Image(req.body.fileName));
});

/* Get meme names every second */
app.get('/memes', (req, res) => {
  const getMemeNames = (err, data) => {
    res.send(data);
  }
  fs.readdir('/home/mc/garage_script/public/memes', getMemeNames);
});

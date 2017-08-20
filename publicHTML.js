const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const app = express();
const gm = require('gm');

app.listen(3002);
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '500mb' }));

// Listen to a POST request from the submit message button
app.post('/submit', (req, res) => {
    fs.writeFile('/home/mc/garage_script/public/inbox.txt', `\n Name: ${req.body.name} Comment: ${req.body.comment} \n`);
    res.send('Got the POST request!');
});

// Listen to a POST request from the take photo button
app.post('/pics', (req, res) => {
  let picData = req.body.canvas.replace('data:image/png;base64,', '');
  let picPath = `/home/mc/garage_script/public/pics/${req.body.name}.png`;
  let memePath = `/home/mc/garage_script/public/memes/${req.body.name}.png`;

  // Add the pic into a folder called pics then generate the meme
  // and then add it into a folder called memes.
  fs.writeFile(picPath, picData, 'base64', () => {
    gm(picPath).fontSize(40).drawText(50, 50, req.body.comment).write(memePath, (err) => {
      console.log('Meme Error: ', err);
    });
  });
});


const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3002);
app.use(express.static('public'));

app.get('/submit', (req, res) => {
  fs.appendFile('/home/mc/garage_script/public/publicHTML.txt', `Name: ${req.query.name} Comment: ${req.query.comment} \n`);
  res.send('Your comment has been received.');
});

const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3002);
app.use(express.static('public'));

app.get('/submit', (req, res) => {
  fs.appendFile('/home/mc/garage_script/public/publicHTML.txt', 'Name: ' + req.query.a1 + ' Comment: ' + req.query.a2 + '\n');
  res.send('Your comment has been received.');
});

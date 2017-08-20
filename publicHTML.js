const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3002);
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '500mb' }));

/*
Lesson 4
app.get('/submit', (req, res) => {
  fs.appendFile('/home/mc/garage_script/public/publicHTML.txt', 'Name: ' + req.query.a1 + ' Comment: ' + req.query.a2 + '\n');
  res.send('Your comment has been received.');
});

Lesson 5
app.get('/XMLHttpRequest', (req, res) => {
  fs.appendFile('/home/mc/garage_script/public/xmlPublicHTML.txt', `\n Name: ${req.query.a1} Comment: ${req.query.a2} \n`);
  res.send('Your comment has been received.');
});

Lesson 6
app.get('/XMLHttpRequest', (req, res) => {
  fs.appendFile('/home/mc/garage_script/public/inbox.txt', `\n Name: ${req.query.a1} Comment: ${req.query.a2} \n`);
  res.send('Your comment has been received.');
});

Lesson 7
app.post('/submit', (req, res) => {
  fs.appendFile('/home/mc/garage_script/public/inbox.txt', `\n Name: ${req.body.name} Comment: ${req.body.comment} \n`);
  res.send('Got the POST request!');
});
*/

// Lesson 8
app.post('/submit', (req, res) => {
  fs.appendFile('/home/mc/garage_script/public/inbox.txt', `\n Name: ${req.body.name} Comment: ${req.body.comment} \n`);
  res.send('Got the POST request!');
});

// Listen to a POST request from the take photo button
app.post('/pics', (req, res) => {
  res.send('You took a pic!');
});


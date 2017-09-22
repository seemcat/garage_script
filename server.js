const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000);
app.use(express.static('public'));
app.use(bodyParser.json({}));

let position = {
  top: 0,
  left: 0
};

app.post('/move', (req, res) => {
  const direction = req.body.direction;

  if (direction === 'up'){
    position['top'] -= 10;
  } else if (direction === 'down'){
    position['top'] += 10;
  } else if (direction === 'left'){
    position['left'] -= 10;
  } else if (direction === 'right'){
    position['left'] += 10;
  }

  res.send(position);
});

app.get('/imgPos', (req, res) => {
  res.send(position);
});

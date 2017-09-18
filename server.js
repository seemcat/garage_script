const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3000);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Made it to the website!');
});

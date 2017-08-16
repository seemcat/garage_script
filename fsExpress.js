// A program that will display everyone's name (excluding mine) into a web application.
const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3002);

app.get('/*', (req, res) => {
  const printName = (err, data) => {
    let names = '';
    data.forEach((name) => {
      if(name !== 'mc'){
        names = names + '\n' + name + '\n';
      }
    });
    res.send(names);
  }
  fs.readdir('/home', printName);
});

const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.listen(3000);
app.use(express.static('public'));
app.use(bodyParser.json({}));

let numOfTickets = 100;

app.post('/buyTickets', (req, res) => {
  numOfTickets = numOfTickets - req.body.MBTicketsPurchased;
  res.send(numOfTickets.toString());
});

app.get('/ticketsLeft', (req, res) => {
  res.send(numOfTickets.toString());
});

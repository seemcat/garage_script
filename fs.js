// A function that will read the names from the directory and print them all out.

const fs = require('fs');

const printName = (err, data) => {
  console.log(data);
}

fs.readdir('/home', printName);

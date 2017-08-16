// A function that will write everyone's name except for mine in a new file.
const fs = require('fs');

const printName = (err, data) => {
  let names = '';
  data.forEach((name) => {
    if(name !== 'mc'){
      names = names + '\n' + name + '\n';
    }
  });
  fs.writeFile('/home/mc/garage_script/fsExpressResult.txt', names, (err) => {
    console.log('Error: ', err);
  });
}

fs.readdir('/home', printName);

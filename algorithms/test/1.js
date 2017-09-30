const count9 = require('../solutions/1.js');

const test = (input, i, count, solution) => {
  console.log('count9', count9(input, i, count));
  if(count9(input, i, count) == solution){
    console.log('Passed');
  } else {
    console.log('Failed');
  }
}

test('5son9b9', i = 0, count = 0, 2);

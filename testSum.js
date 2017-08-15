const add = require('./sum.js');

const testSum = (a, b, c) => {
  if(add(a,b) === c){
    console.log('Passed');
  } else {
    console.log('Failed');
  }
}

testSum(1,2,3);
testSum(0,0,1);

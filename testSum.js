const add = require('./sum.js');

const testSum = (num1, num2, sum) => {
  if(add(num1,num2) === sum){
    console.log('Passed');
  } else {
    console.log('Failed');
  }
}

testSum(1,2,3);
testSum(0,0,1);

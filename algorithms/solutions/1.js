const count9 = (input, i = 0, count = 0) => {
  if(i == input.length){
    return count;
  }
  if(input[i] == 9){
    count += 1;
  }
  return count9(input, i += 1, count);
};

/* const count9 = (input) => {
  let count = 0;
  for(i = 0; i <= input.length - 1; i++){
    if(input[i] == 9){
      count += 1;
    }
  }
  return count;
} */

//console.log(count9('5son9b9'));
module.exports = count9;

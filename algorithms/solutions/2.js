const removeL = (word) => {
  let count = 0;
  for(i = 0; i <= word.length - 1; i++){
    if(word[i] === 'l'){
      count += 1;
    }
  }

  console.log('count', count);
  const wordArr = word.split('');

  for(j = 0; j <= word.length - 1; j++){
  if(count > 1){
    if(word[j] === 'l'){
      wordArr.splice(j, 1);
      count = count - 1;
    }
  }
}
return wordArr;
}

console.log(removeL('helllo'));

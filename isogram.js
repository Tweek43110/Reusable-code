function isIsogram(str){
  console.log(str);
  let str2 = str.toLowerCase();
  let testPass = true;
  let counts = {};
  
  if (typeof str === undefined) {
  return true;
  }
  
  for (let i = 0; i < str2.length; i++) {
    //Stores each character of the word as it iterates
    let letter = str2.charAt(i);
    if (counts[letter]) {
      //Sets counts equal to more than one if there
      //are repeated characters
      counts[letter] = 1 + counts[letter];
    } else {
      counts[letter] = 1;
      }
      
    //Throws a false code if not an isogram
    if(counts[letter] > 1) {
      return testPass = false;
    }
  }
  return testPass;
}

//******************The easy way!
function isIsogram(str){ 
  //.test searches for a match
  //\w finds a word character
  //. searches for a single character
  //.* means followed by any sequence of characters
  //\1 followed by the first letter we captured
  //i searches with case insensitivity
//In other words, this will match any string that has at least two of the same letters. Take the opposite of that boolean. 
  return !/(\w).*\1/i.test(str)
}

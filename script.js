console.log('What is the quote below');


/* 

Logic 
  1. Get string to split
  2. Split the string on spaces and save to new array
  3. shuffle the array 
  4. create new string 
  5. display it 

  */




// 1. Get string to split
let str = 'No one can make you feel inferior without your consent.';
// 2. Split the string on spaces and save to new array

let splitStr = str.split(' ');





  // 3. shuffle the array 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


let reArrange =  shuffle(splitStr);

//console.log(reArrange);
//console.log(str);

// 4. create new string


newString = reArrange.join(' ');


// 5. display it 

console.log(newString);
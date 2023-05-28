const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Results for the ExtraLargeArray
// insert 777.7085 ms
// append 2.8048 ms

// Results for the LargeArray
// insert 6.6992 ms
// append 470 μs

// Results for the MediumArray
// insert 222.3 μs
// append 151.2 μs

// Results for the smallArray
// insert 54 μs
// append 94.9 μs

// Results for the tinyArray
// insert 32.2 μs
// append 68.2 μs

//It seems that the slower function is the insert function, getting much slower the larger the array is probably, because it has to acknowledge every variable that is created to put the most recent one in the beginning. Due to the append function's .push method I believe it will always scale better in this situation because it only needs to stack onto the end of the array.


const addToZero = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return true
            }
        }
    }
    return false
}

console.log(addToZero([1, 2, 3, -2]))


const hasUniqueChars = (letter) => {
    let letters = letter.split('')
    // console.log([letters])
    for (let i = 0; i < letters.length; i++) {
     for (let j = i + 1; j < letters.length; j++) {
      if (letters[i] === letters[j]) {
        return false
              }
        }
    }
    return true
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False



function isPangram(sentence) {
    const lowerCaseSentence = sentence.toLowerCase();
    const lettersOnly = lowerCaseSentence.replace(/[^a-z]/g, '');
    const uniqueLetters = lettersOnly.split('');
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const atoz = alphabet.split('')

    for (let i = 0; i < atoz.length; i++) {
         if (!uniqueLetters.includes(atoz[i])) {
           return false;
                 }
           }
        return true;
    }
  

console.log(isPangram("The quick brown fox jumps over the lazy dog."))

console.log(isPangram("Hi i'm doug"))



function findLongestWord(words) {
    let longestLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      const currentLength = words[i].length;
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }
  
    return longestLength;
  }

console.log(findLongestWord(["hi", "hello"]));
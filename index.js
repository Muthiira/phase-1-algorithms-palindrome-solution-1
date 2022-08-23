function reverseString(word){
  const arrayValues = word.split("");
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join("");
  return reverseString
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedword = reverseString(word)
   
  if (reversedword == word){
    return true;
  }
  else {
    return false;
  }

}

/* 
  Add your pseudocode here
  if word === reverse.word => true { (is palindrome)}
  if word  === reverse.word => false{{is not palindrome}}
  convert word to array
  reverse array values
  convert reversed array to Word
  compare word with reversedWord

*/

/*
  Add written explanation of your solution here
  function reverseString converts word to array then the array is reversed then turned back to a string(word
    ) the function is allocated a variable called  reversedword which we compare it with the word to
    find whether string is palindrome on not. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
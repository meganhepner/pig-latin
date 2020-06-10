$(document).ready(function() {
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    let userInput = ($("input#word").val());
      
  });
});


//function pigLatinGenerator()
const vowel = ['a', 'e', 'i', 'o', 'u'];

for (i=0; i<userInput.length; i++) {
  if (userInput[i].indexOf === "a" || "e" || "i" || "o" || "u") {
    const indexOfVowel = userInput.indexOf(vowel)
    console.log(indexOfVowel);
  } 
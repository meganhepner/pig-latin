$(document).ready(function() {
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    let userInput = ($("input#word").val());
    const result = pig(userInput);
    $("#result").text(result);
  }); 
});
 

function pig(userInput){
  const searchTerm = 'A';
  if (userInput.indexOf(searchTerm) === 0){
    if(userInput.length === 1){
  console.log("yay")
  } else {
console.log("nope")
  
// }
};
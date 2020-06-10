$(document).ready(function() {
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    let userInput = ($("input#word").val());
    const result = pig(userInput);
    $("#result").text(result);
  }); 
});


function pig(userInput){
  if (userInput.length === 1){
    result = (userInput + "way");
    $("#result").text(result);
  } else {
    //for (i=0; i<userInput.length; i++) {
      if (userInput.indexOf === "a",  "e", "i",  "o",  "u") {
      result = (userInput)
        // userInput.concat(“ay”);
      }
    }
  }
}

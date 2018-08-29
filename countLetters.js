var countLetters = function(input){
  var lowerInput = input.split(" ").join("").toLowerCase();
  var output = {};
  for(var letter of lowerInput){
    if(!output.hasOwnProperty(letter)){
      output[letter] = 1;
    }else if(output.hasOwnProperty(letter)){
      output[letter] += 1;
    }
  }
  return output;
}

console.log(countLetters("a B r A c A d A b R a "));


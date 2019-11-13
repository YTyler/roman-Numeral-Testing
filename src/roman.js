var romanNums = ['I','V','X','L','C','D','M'];

//Operates on & splits a number
export function romanSplit(number) {
  number = number.split("");
  number.reverse();

  for (var i=0; i < number.length; i++) {
    number[i] = romanDigit(number[i], i                                 );
  }
  return number.reverse().join("");
}
//Operates on each single digit
export function romanDigit(digit, r){
  var digitOutput = "";
  r = (r+1)*2;
  if (digit === 9) {
    digitOutput = romanNums[r-2] + romanNums[r];
  }
  else if (digit > 3) {
    digitOutput += romanNums[r-1];
    if (digit > 4) {
      for (var j=0; j < digit - 5; j++){
        digitOutput += romanNums[r-2];
      }
    } else {
      digitOutput = romanNums[r-2] + digitOutput;
    }
  } else {
    for (var k=0; k < digit; k++) {
      digitOutput += romanNums[r-2];
    }
  }
  return digitOutput;
}

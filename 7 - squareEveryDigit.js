//CodeWars
//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  let numStr = num.toString();

  let result = "";

  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]);

    result += digit * digit;
  }

  return parseInt(result);
}

console.log(squareDigits(9119));

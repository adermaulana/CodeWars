//CodeWars
//https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

function validatePIN(pin) {
  //return true or false
  if ((typeof pin == "number" && pin.length == 4) || pin.length == 6) {
    return "true";
  }
  return "false";
}

console.log(validatePIN(123456));

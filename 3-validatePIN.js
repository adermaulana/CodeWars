//CodeWars
//https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

  console.log(validatePIN("1234"))


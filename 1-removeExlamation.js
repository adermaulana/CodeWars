//CodeWars
//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// function removeExlamation(exlamation) {
//   result = "";

//   for (i = 0; i < exlamation.length; i++) {
//     if (exlamation[i] !== "!") {
//       result += exlamation[i];
//     }
//   }

//   return result;
// }

// function removeExlamation(exlamation) {
//     return exlamation.replace('!','');
// }

function removeExlamation(exlamation) {
  return exlamation.split("!").join("");
}

console.log(removeExlamation("Hello World!"));

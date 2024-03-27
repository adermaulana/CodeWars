// function monkeyCount(n){

//     result = []

//     for(let i = 1; i <= n; i++){
//         result.push(i)
//     }

//     return result;
// }

// function count(n) {
//   return Array.from({ length: n }, (_, i) => i + 1);
// }

// var fizzBuzz = function (n) {
//   result = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0 && i % 3 == 0) {
//         result.push("FizzBuzz");
//       }
//       else if (i % 3 == 0) {
//       result.push("Fizz");
//     } else if (i % 5 == 0) {
//       result.push("Buzz");
//     } else {
//       result.push(`${i}`);
//     }
//   }
//   return result;
// };

function getMiddle(s) {
  result = s.length;
  tengah = Math.floor(result / 2);

  if (result % 2 === 0) {
    return s.substring(tengah - 1, tengah + 1);
  } else {
    return s.charAt(tengah);
  }
}

console.log(getMiddle("testinyadadmwkamda"));

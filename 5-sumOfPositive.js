//CodeWars
//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

console.log(positiveSum([1, -4, -6, 7, 12]));

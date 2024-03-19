//CodeWars
//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  let BMI = weight / (height * height);

  if (BMI <= 18.5) {
    return "Underweight";
  } else if (BMI <= 25.0) {
    return "Normal";
  } else if (BMI <= 30.0) {
    return "Overweight";
  }

  return "Obese";
}

console.log(bmi(80, 1.8));

function number2words(number) {
  const units = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];
  
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];
  
  const getWords = (num) => {
    if (num < 20) {
      return units[num];
    } else if (num < 100) {
      const digit = num % 10;
      if (digit === 0) {
        return tens[Math.floor(num / 10)];
      } else {
        return tens[Math.floor(num / 10)] + "-" + units[digit];
      }
    } else {
      const hundreds = units[Math.floor(num / 100)] + " hundred";
      const remainder = num % 100;
      if (remainder === 0) {
        return hundreds;
      } else {
        return hundreds + " " + getWords(remainder);
      }
    }
  };

  if (number === 0) {
    return "zero";
  } else {
    return getWords(number);
  }
}

console.log(number2words(0)); // Output: "zero"
console.log(number2words(1)); // Output: "one"
console.log(number2words(9)); // Output: "nine"
console.log(number2words(10)); // Output: "ten"
console.log(number2words(17)); // Output: "seventeen"
console.log(number2words(20)); // Output: "twenty"
console.log(number2words(21)); // Output: "twenty-one"
console.log(number2words(45)); // Output: "forty-five"
console.log(number2words(80)); // Output: "eighty"
console.log(number2words(99)); // Output: "ninety-nine"
console.log(number2words(100)); // Output: "one hundred"
console.log(number2words(301)); // Output: "three hundred one"
console.log(number2words(799)); // Output: "seven hundred ninety-nine"
console.log(number2words(800)); // Output: "eight hundred"
console.log(number2words(950)); // Output: "nine hundred fifty"
console.log(number2words(1000)); // Output: "one thousand"
console.log(number2words(1002)); // Output: "one thousand two"
console.log(number2words(3051)); // Output: "three thousand fifty-one"
console.log(number2words(7200)); // Output: "seven thousand two hundred"
console.log(number2words(7219)); // Output: "seven thousand two hundred nineteen"
console.log(number2words(8330)); // Output: "eight thousand three hundred thirty"
console.log(number2words(99999)); // Output: "ninety-nine thousand nine hundred ninety-nine"
console.log(number2words(888888)); // Output: "eight hundred eighty-eight thousand eight hundred eighty-eight"

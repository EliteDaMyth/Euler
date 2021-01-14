let { primeFactors } = require("./utils");

let number = 600851475143;
let factors = primeFactors(number);
let maxFactor = Math.max(...factors);
console.log(maxFactor);

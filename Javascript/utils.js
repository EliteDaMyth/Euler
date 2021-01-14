function primeFactors(number) {
	let result = [];
	for (let i = 2; i <= number; i++) {
		while (isPrime(i) && number % i === 0) {
			if (!result.includes(i)) result.push(i);
			number /= i;
		}
	}
	return result;
}
function isPrime(num) {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

module.exports = { isPrime, primeFactors };

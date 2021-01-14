let limit = 4000000,
	sum = 0,
	a = 1,
	b = 1;

while (b < limit) {
	if (b % 2 == 0) sum += b;
	h = a + b;
	a = b;
	b = h;
}

console.log(sum);

let a = 0;
for (i = 0; i < 1000; i++) {
	a += i % 5 == 0 || i % 3 == 0 ? i : 0;
}
console.log(a);

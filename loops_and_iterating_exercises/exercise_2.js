let result = 1
let factorial = (x) => {
	result = 1
	for (let i = 1; i <= x; i++){
		result *= i   
	}
	console.log(result);
}
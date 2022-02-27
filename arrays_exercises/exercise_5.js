let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let findIntegers = (x) => {

// solution
	return x.filter(index => Number.isInteger(index))};


	let integers = findIntegers(things);
console.log(integers); 
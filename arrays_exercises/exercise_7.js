let array = [3, 5, 7];

let sumOfSquares = arr => {
	return arr.reduce((acc, initial) => acc += initial * initial, 0)
}
// If 0 is not provided as initial value, the accumulator is initialized at the first value

console.log(sumOfSquares(array));

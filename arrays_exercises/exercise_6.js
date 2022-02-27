let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = arr => {
	let newArr = arr.map(string => string.length)
		return newArr.filter(x => x % 2 === 1);
}

console.log(oddLengths(arr));
let evenOrOdd = (num) => {
	if (typeof num === 'number')	{
		if (num % 2 === 0) {
			console.log('even')
		} else {
		console.log('odd')
		}
	} else console.log('Sorry, the value you passed is not an integer')
}
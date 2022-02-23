// The console.log will print Product 2. The switch statement in this case will check if the serial argument matches '113'. If it does, it will print Product 2. However the issue here is that there are no break statements which are crucial on a switch statement. So after the console outputs Product 2, the rest of commands are still going to run which will result in:
// Product 2
// Product 3
// Product not found!
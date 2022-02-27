let rlSync = require('readline-sync');
let age = rlSync.question('How old are you? ');

for  (let i = 10; i <= 40; i+= 10){
console.log(`In ${i} years, you will be ${Number(age) + i}.`);
}

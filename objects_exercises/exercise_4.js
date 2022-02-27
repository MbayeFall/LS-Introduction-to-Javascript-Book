let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let keys = Object.keys(obj)

let finalArr = keys.map(index => index.toUpperCase());
console.log(finalArr)
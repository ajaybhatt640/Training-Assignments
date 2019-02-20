function add(a,b) {
  if (arguments.length === 1) {
    return function(b2) { 
      return a + b2;   
    };
  }
  return a + b;
}
console.log(add(10, 10)); // 20
console.log(add(10)(10)); // 20
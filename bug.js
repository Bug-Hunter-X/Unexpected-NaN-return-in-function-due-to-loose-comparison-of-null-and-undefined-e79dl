function foo(x) {
  if (x == null) {
    return 0; //intended
  }
  return x + 1;
}

console.log(foo(null)); //output 0
console.log(foo(undefined));// output NaN instead of 0
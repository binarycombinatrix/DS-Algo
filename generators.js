function* fibonacciGenerator() {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

// Create an instance of the Fibonacci generator
const fibonacci = fibonacciGenerator();

// Generate the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(fibonacci.next().value);
}

// Output
// 0 1 1 2 3 5 8 13 21 34

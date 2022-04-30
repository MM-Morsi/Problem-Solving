// recursive implementation 

const fib = (n) => {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
// big number takes a lot of time to calculate
console.log(fib(50));
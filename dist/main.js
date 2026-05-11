function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const count = 10;
let sum = 0;
console.log(`Dãy ${count} số Fibonacci đầu tiên là:`);
for (let i = 0; i < count; i++) {
    const currentFib = fibonacci(i);
    console.log(currentFib);
    sum += currentFib;
}
console.log("----------------------------");
console.log(`Tổng các số Fibonacci trên là: ${sum}`);
//# sourceMappingURL=main.js.map
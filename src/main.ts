/**
 * Bước 1: Khai báo hàm trả về số Fibonacci bằng đệ quy
 * Công thức: F(n) = F(n-1) + F(n-2) với F(0)=0, F(1)=1
 */
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Giả sử chúng ta muốn hiển thị 10 số đầu tiên trong dãy Fibonacci
const count: number = 10;

// Bước 3: Khai báo biến sum = 0
let sum: number = 0;

console.log(`Dãy ${count} số Fibonacci đầu tiên là:`);

/**
 * Bước 2 & 4: Sử dụng vòng lặp để hiển thị và tính tổng
 */
for (let i = 0; i < count; i++) {
    const currentFib: number = fibonacci(i);

    // Hiển thị số Fibonacci (Bước 2)
    console.log(currentFib);

    // Thực hiện việc tính tổng (Bước 4)
    sum += currentFib;
}

console.log("----------------------------");
console.log(`Tổng các số Fibonacci trên là: ${sum}`);
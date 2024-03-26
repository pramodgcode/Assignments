function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

const array = [1, 2, 3, 4, 5];
const result = sumOfSquares(array);
console.log("Sum of squares:", result);

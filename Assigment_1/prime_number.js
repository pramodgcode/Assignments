function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let arr = [457, 273, 323, 429]
console.log(arr[0])
if (isPrime(arr[0])) {
    console.log("prime number")
} else {
    console.log("not a prime")
}

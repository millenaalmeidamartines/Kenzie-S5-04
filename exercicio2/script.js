function hundredSum() {
    let sum = 0;

    for (let n = 1; n <= 100; n++) {
        sum += n;
    }
    return sum;
}
console.log(hundredSum());
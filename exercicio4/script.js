function sumAverage() {
    let sum = 0;
    let even = 0;
    
    for (let n = 50; n <= 70; n++) {
        if (n % 2 === 0) {
            sum += n;
            even++;
        }
    }
    let average = sum / even;

    console.log('A soma é', sum, 'e a média é ', average);
}

sumAverage();
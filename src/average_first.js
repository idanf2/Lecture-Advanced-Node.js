function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    let avg = sum / numbers.length;
    console.log('avg: ' + avg);
}

average([1,2,3,4,5]);
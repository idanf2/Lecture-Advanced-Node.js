function asyncAvg(numbers, avgCB) {
    var sum = 0;
    function sumAsync(numbers,i, cb) {
        if (i === numbers.length) {
            cb(sum);
            return;
        }
        sum += numbers[i];
        setImmediate(sumAsync.bind(null, numbers, i + 1, cb));
    }
    sumAsync(numbers, 0, function (sum) {
        var avg = sum / numbers.length;
        avgCB(avg);
    });
}

asyncAvg([1,2,3,4,5], function (avg) {
    console.log('avg: ' + avg);
});
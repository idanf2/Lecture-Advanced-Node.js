let fs = require('fs');
console.log("First function in the stack. Exciting!");
setTimeout(() => {
    console.log("Finished the timeout");
}, 3000);

fs.readFile('./src/async.js', (error) => {
    if(error) {
        console.log("Something went wrong");
    }
    console.log("Finished to read file");
});

console.log("Second function. WOW!");
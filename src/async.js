let dateFormat = require('dateformat');

console.log("Hello. time: "+ getDate());
setTimeout(() => {
    console.log("World1. time: " + getDate());
}, 4000);
console.log("World2. time: " + getDate());

function getDate() {
    return dateFormat(new Date(), "ss");
}
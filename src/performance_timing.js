const {performance} = require('perf_hooks');

setTimeout(() => {
    process.on('exit', () => {
        console.log('setTimeout', performance.nodeTiming);
    });
}, 2000);
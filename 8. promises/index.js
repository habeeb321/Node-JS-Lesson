
function delayedFn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('starting promise');
delayedFn(2000).then(() => console.log('after 2 seconds resolved'));
console.log('end');

function divideFn(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject('can not perform division by 0');
        } else {
            resolve(num1 / num2);
        }
    });
}

divideFn(10, 5).then((result) => console.log(result, 'res')).catch((error) => console.log(error, 'error'));

let browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'opera'];

for (let browser in browsers){
    console.log(browser);
}

console.log('-------------------');

for (let index in browsers){
    console.log(browsers[index]);
}

console.log('-------------------');
for (let browser of browsers){
    console.log(browser);
}

const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

console.log(`Base name ${path.basename(filePath)}`);

console.log(`Absolute name ${path.resolve(__dirname, 'content', 'subfolder', 'test.txt')}`);
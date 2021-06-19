// Require file system access
fs = require('fs');

// Read file buffer 
const imgFile = fs.readFileSync('test-pattern.jpeg');

// Encode image buffer to hex
const image2Hex = new Buffer.from(imgFile, 'hex');

// Output encoded data to console
console.log(image2Hex);


// Decode hex
const hex2Img = new Buffer.from(image2Hex, 'hex');

// Save decoded file file system
fs.writeFileSync('test-pattern-decoded.jpeg', hex2Img);
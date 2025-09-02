const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('dataFolder created');
}

const filePath = path.join(dataFolder, 'example.txt');
fs.writeFileSync(filePath, 'Hello Guys');
console.log('File created successfully');

const readFileContent = fs.readFileSync(filePath, 'utf8');
console.log('File content:', readFileContent);

const appendFile = fs.appendFileSync(filePath, '\nnew content added');
console.log('New content added');

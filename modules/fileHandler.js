const fs = require('fs');
const path = require('path');

class FileHandler {
    constructor(fileName) {
        this.filePath = path.join(__dirname, '../', fileName);
    }

    appendToFile(text, callback) {
        fs.appendFile(this.filePath, text + '\n', (err) => {
            if (err) {
                return callback(err);
            }
            callback(null, `Text succesfully appended: ${text}`);
        });
    }

    readFile(callback) {
        fs.readFile(this.filePath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'FNOENT') {
                    return callback(`404 - File not found: ${this.filePath}`);
                }
                return callback(err);
            }
            callback(null, data);
        });
    }
}

module.exports = new FileHandler('file.txt');
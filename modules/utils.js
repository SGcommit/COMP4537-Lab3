const fs = require('fs');
const path = require('path');

const langPath = path.join(__dirname, '../lang/en/en.json');
const messages = JSON.parse(fs.readFileSync(langPath, 'utf8'));

class Utils {
    getGreetingMessage(name) {
        const currentDate = new Date().toString();
        return messages.greeting.replace('%1', name).replace('%2', currentDate);
    }
}

module.exports = new Utils();
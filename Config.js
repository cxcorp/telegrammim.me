const path = require('path');

var Config = {
    DataFile: path.join(__dirname, process.env.DATA_FILE || 'datamme.json'),
    TelegramJoinLink: process.env.TG_JOIN_LINK,
    Port: process.env.PORT || 3000
};

module.exports = Config;
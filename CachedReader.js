'use strict';
const fs = require('fs');
const path = require('path');
const Logger = require('./Logger.js');


class CachedReader {
    constructor(filePath) {
        this.filePath = filePath;
        this.expired = true;
        this.cache = null;

        this.updateCache = (callback) => {
            fs.readFile(this.filePath, (err, data) => {
                if (err) {
                    Logger.log(
                        'error',
                        'An error occurred while updating the cache! Keeping the old cache intact.',
                        {
                        DataFile: this.filePath,
                        Error: err
                    });
                    callback(err, data);
                    return;
                }

                this.cache = data;
                this.expired = false;
                Logger.log('verbose', 'Updated cache. Marking cache expired.');
                callback(err, data);
            });
        };

        fs.watch(filePath, {
            persistent: false
        }, (eventType, file) => {
            if (eventType === 'rename') {
                Logger.log('warning', 'Data file was renamed!', {
                    DataFile: this.filePath,
                    NewName: file
                });
            } else if (eventType === 'change') {
                Logger.log('info', 'Data file changed!', {
                    DataFile: file
                });
            }

            this.expired = true;
        });
    }

    read(callback) {
        if (this.expired) {
            this.updateCache(callback);
            return;
        }
        callback(null, this.cache);
    }
}

module.exports = CachedReader;
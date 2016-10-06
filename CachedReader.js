'use strict';
const fs = require('fs');
const path = require('path');
const Logger = require('./Logger.js');

class CachedReader {
    constructor(filePath, maxCacheAge) {
        this.maxCacheAge = maxCacheAge * 1000; // seconds to ms
        this.cache = null;
        this.lastRead = 0;

        this.updateCache = ((callbackUpdateDone) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    Logger.log('error', 'Reading data file failed!', {
                        Path: filePath,
                        Error: err
                    });
                }

                this.cache = data;
                this.lastRead = Date.now();
                Logger.log('verbose', 'Finished updating data cache.', {
                    MaxCacheAge: this.maxCacheAge
                });
                callbackUpdateDone(err, data);
            });
        });
    }

    read(callback) { // callback = function(err, data)
        const now = Date.now();
        const age = now - this.lastRead;

        if (age > this.maxCacheAge) {
            this.updateCache(callback);
            return;
        }
        callback(null, this.cache);
    }
}

module.exports = CachedReader;
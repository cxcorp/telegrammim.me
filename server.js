'use strict';
const fs = require('fs');
const path = require('path');
const app = require('express')();
const Logger = require('./Logger.js');
const Config = require('./Config.js');
const CachedReader = require('./CachedReader.js');

const dataReader = new CachedReader(Config.DataFile, 10); // 5min cache life

app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache'); // no cacherino
    next();
});

app.get('/api/random', function(req, res) {
    dataReader.read((err, data) => {
        if (err) {
            res.status(500)
               .json({ error: 'An internal server error has occurred.' });
            return;
        }

        let response = getRandomDataSnippet(JSON.parse(data));
        res.json(response);
    });
});

app.listen(Config.Port, function() {
    Logger.log('info', 'Server started!', {
        DataFile: Config.DataFile,
        Port: Config.Port
    });
});

function getRandomDataSnippet(data) {
    let i = getRandomInt(0, data.length);
    return data[i];
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

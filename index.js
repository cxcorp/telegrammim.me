'use strict';
const fs = require('fs');
const path = require('path');
const winston = require('winston');
const app = require('express')();
const Config = require('./Config');

//app.get('*', function(req, res) {
//    res.redirect(303, 'tg url here');
//});

app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache'); // no cacherino
    next();
});

app.get('/api/random', function(req, res) {
    fs.readFile(Config.DataFile, function(err, data) {
        if (err) {
            winston.log('error', 'Reading data file failed!', {
                DataFile: Config.DataFile,
                Error: err
            });
            process.exit(1);
        }

        let randomData = getRandomDataSnippet(JSON.parse(data));
        res.json(randomData);
    });
});

app.listen(Config.Port, function() {
    winston.log('info', 'Server started!', {
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

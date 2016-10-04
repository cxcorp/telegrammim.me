var app = require('express')();

app.get('*', (res, req) =>
{
    res.redirect(303, 'https://telegram.me/joinchat/AmQObwknuNYZOManRnEO3Q');
});
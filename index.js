const express = require('express');
const app = express();
const pages = require('./exported');

app.get('/', function(req, res) {
    res.send('Hola ' + req.get('user-agent'));
})

app.get('/loops', pages.loops)

app.get('/fizzbuzz', pages.fizzbuzz)

app.listen(3000, function() {
    console.log("The server is now running on port 3000");
})
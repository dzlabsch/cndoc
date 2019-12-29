'use strict';

const express = require('express');
var path = require('path');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static(__dirname + '/app/'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/'));
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

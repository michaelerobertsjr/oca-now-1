const express = require('express');

let app = express();

app.get('*', (req, res) => res.send(`Feel'n it`));

module.exports = app;
const express = require('express');

let app = express();

app.get('*', (req, res) => res.send('Yaaaz'));

module.exports = app;
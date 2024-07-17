const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/game', function(req, res) {
    const htmlFilePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(htmlFilePath);
});

app.listen(1000);
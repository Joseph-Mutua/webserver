const express = require('express');
const app = express();
const log = console.log;

app.get('', (req, res) => {
    res.send("Hello Mutua! This is Express!");
});

app.get('/help', (req, res) => {
    res.send('Help Page!');
});

app.get('/about', (req, res) => {
    res.send("This is the about page");
});

app.get('/weather', (req, res) => {
    res.send("Here you can view your weather!");
});

app.listen(8080, () => {
    log("Server is on port 8000");
});

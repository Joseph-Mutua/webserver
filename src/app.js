const express = require('express');
const app = express();
const log = console.log;

app.get('', (req, res) => {
    res.send("<h1>Weather</h1>");
});

app.get('/help', (req, res) => {
    res.send('Help Page!');
});

app.get('/about', (req, res) => {
    res.send("<h1>This is the about page</h1>");
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: "The temp is 15 and humidity is 78%",
        location: "Philadelphia"
    });
});

app.listen(8080, () => {
    log("Server is on port 8000");
});

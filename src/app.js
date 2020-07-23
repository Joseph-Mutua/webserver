const path = require('path');
const express = require('express');
const app = express();

//Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

//Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Joseph Mutua"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Joseph Mutua"
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help Page",
        message: "Welcome to the Help page"
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: "The temp is 15 and humidity is 78%",
        location: "Philadelphia"
    });
});

app.listen(8080, () => {
    console.log("Server is on port 8000");
});

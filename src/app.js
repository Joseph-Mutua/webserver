const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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
        name: "Joseph Mutua",
        message: "Welcome to the Help page"
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address!"
        });
    }
    res.send({
        forecast: "The temp is 15 and humidity is 78%",
        address: req.query.address
    });
});

app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term!"
        });
    }

    console.log(req.query.search);

    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render("404", {
        title: 404,
        name: "Joseph Mutua",
        errorMessage: "Help Article not found!"
    });
});

app.get('*', (req, res) => {
    res.render("404", {
        name: "Joseph Mutua",
        errorMessage: "Page not Found!"
    });
});


app.listen(8080, () => {
    console.log("Server is on port 8000");
});

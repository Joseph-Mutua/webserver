const path = require('path');
const express = require('express');
const app = express();

const log = console.log;

const publicDirPath = path.join(__dirname, '../public');
app.use(express.static(publicDirPath));

app.get('/weather', (req, res) => {
    res.send({
        forecast: "The temp is 15 and humidity is 78%",
        location: "Philadelphia"
    });
});

app.listen(8080, () => {
    log("Server is on port 8000");
});

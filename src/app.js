const express = require('express');
const app = express();

app.get(' ', (req, res) => {
    res.send("Hello Express!");
});

app.listen(8080, 'localhost', () => {
    console.log("Server is up on port 3000");
});

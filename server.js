// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the dist directory
app.use(express.static(__dirname + '/dist/angular-app-trillo'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/angular-app-trillo'))
});

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/fastread'));

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/fastread/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("App is running on port " + port);
});

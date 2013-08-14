/*
This script depends on Node.js and Express
Install node.js form www.node.org

Install Express by Windows Command Prompt
Type "npm install Express"
 */

var express = require('express');
var app = express();
port = process.argv[2] || 8000;

app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
    );
});
app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
var path = require("path");

module.exports = function(app){
    // Sends user to survey.html if user enters /survey into url or presses button
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Default path, so it loads up main page on loading into server
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
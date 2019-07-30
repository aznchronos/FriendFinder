var friends = require("../data/friends")

module.exports = function(app){
    // Returns all Friends in friends.js
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body.points);

        // Pulls all parts of the body (Name, Photo, Scores)
        var user = req.body;

        for( var i = 0; i < user.points.length; i++){
            user.points[i] = parseInt(user.points[i]);
        }
    });
};
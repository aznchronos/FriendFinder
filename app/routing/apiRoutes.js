var friends = require("../data/friends")

module.exports = function(app){
    // Returns all Friends in friends.js
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        console.log(req.body.scores);

        // Pulls all parts of the body (Name, Photo, scores)
        var user = req.body;
        // console.log(user);
        for( var i = 0; i < user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }

        var friendIndex = 0;
        var minDifference = 40;

        for(var i = 0; i < friends.length; i++){
            var totalDifference = 0;;
            for(var j = 0; j < friends[i].scores.length; j++){
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            if(totalDifference < minDifference){
                friendIndex = i;
                minDifference = totalDifference;
            }
        }

        friends.push(user)

        res.json(friends[friendIndex]);
    });
};
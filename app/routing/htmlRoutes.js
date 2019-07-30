app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"))
})

app.post("/api/friends", function(req, res){
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});

app.listen(port, function(){
    console.log("App listening on PORT " + port);
})
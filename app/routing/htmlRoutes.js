//Routing
module.exports = function (app){
    //runs survey 
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    // goes home
    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    // get them all
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public.home.html"))
    })
}
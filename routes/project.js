exports.viewProject = function(req, res){
    var name = req.params.name;
    console.log("params " + req.params)
    console.log("The project name is: " + name);
    res.render("project",{
        "projectName": name
    });
};
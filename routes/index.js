
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    "projects":[
      {"name": "Waiting in line", 
    "image": "lorempixel.people.1.jpeg",
    "id": "project1"
      },
      { "name": "Needfinding",
    "image": "lorempixel.city.1.jpeg",
      "id": "project2"
    },
    { "name": "Prototype",
    "image": "lorempixel.city.2.jpeg",
      "id": "project3"
    },
    { "name": "Prototype2",
    "image": "lorempixel.people.2.jpeg",
      "id": "project4"
    },
    { "name": "Prototype3",
    "image": "lorempixel.technics.1.jpeg",
      "id": "project5"
    },
    { "name": "Prototype4",
    "image": "lorempixel.technics.2.jpeg",
      "id": "project6"
    },
    { "name": "Prototype5",
    "image": "lorempixel.jumbotron.jpeg",
      "id": "project7"
    },
    { "name": "Prototype6",
    "image": "lorempixel.abstract.1.jpeg",
      "id": "project8"
    },
    { "name": "Prototype7",
    "image": "lorempixel.abstract.8.jpeg",
      "id": "project9"
    }
  ]
  });
};
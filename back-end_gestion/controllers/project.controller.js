const Project = require ('../models/project.model.js');

//Function create project
exports.createProject = (req, res) => {
	let project = new Project(
		{
      name: req.body.name,
      description: req.body.description,
      begin_date: req.body.begin_date,
      end_date: req.body.end_date,
      total_cost: req.body.total_cost,
      status: req.body.status,
		}
	);
	customer.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("Projet créé");
		}
		res.send(customer);
	})
}

//Print all project
exports.allProjects = (req, res) => {
	Project.find((err, project) => {
		if(err) {
			console.log(err);
		}
		res.send(project);
	})
}

//Print one project
exports.oneProject = (req, res) => {
	Project.findById(req.params.id, (err, project) => {
		if(err) {
			console.log(err);
		}
		res.send(project);
	})
}

//Remove one project
exports.removeProject = (req, res) => {
	Project.findByIdAndRemove(req.params.id, (err, project) => {
		if(err) {
			console.log(err);
		}
		res.send("Projet supprimé");
	})
}

//Update one project
exports.updateProject = (req, res) => {
	Project.findByIdAndUpdate(req.params.id, req.body, (err, project) => {
		if(err) {
			console.log(err);
		}
		res.send("Produit modifié");
	})
}

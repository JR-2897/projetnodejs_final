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
			console.log("Customer created");
		}
		res.send(customer);
	})
}

//Print all project
exports.allProjects = (req, res) => {
	Customer.find((err, project) => {
		if(err) {
			console.log(err);
		}
		res.send(project);
	})
}

//Print one project
exports.oneProject = (req, res) => {
	Customer.findById(req.params.id, (err, project) => {
		if(err) {
			console.log(err);
		}
		res.send(project);
	})
}

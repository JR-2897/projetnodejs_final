const Employee = require ('../models/employee.model.js');

//Function create employee
exports.createEmployee = (req, res) => {
	let employee = new Employee(
		{
			name: req.body.name,
			first_name: req.body.first_name,
			username: req.body.username,
			birth_date: req.body.birth_date,
			address: {
		    street: req.body.address.street,
		    city: req.body.address.city,
		    postal_code: req.body.address.postal_code,
		  },
      phone_number: req.body.phone_number,
      email_address: req.body.email_address,
      office: req.body.office
		}
	);
	employee.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("Employee created");
		}
		res.send(employee);
	})
}

//Print all employees
exports.allEmployees = (req, res) => {
	Employee.find((err, employee) => {
		if(err) {
			console.log(err);
		}
		res.send(employee);
	})
}

//Print one employee
exports.oneEmployee = (req, res) => {
	Employee.findById(req.params.id, (err, employee) => {
		if(err) {
			console.log(err);
		}
		res.send(employee);
	})
}

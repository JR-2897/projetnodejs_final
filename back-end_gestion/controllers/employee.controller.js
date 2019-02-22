const Employee = require ('../models/employee.model.js');

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
	user.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("User created");
		}
		res.send(user);
	})
}

exports.allProducts = (req, res) => {
	Product.find((err, product) => {
		if(err) {
			console.log(err);
		}
		res.send(product);
	})
}

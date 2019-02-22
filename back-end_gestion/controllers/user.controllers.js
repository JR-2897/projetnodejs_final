const User = require ('../models/user.model.js');

exports.createProduct = (req, res) => {
	let user = new User(
		{
			name: req.body.name,
			first_name: req.body.first_name,
			username: req.body.username,
			birth_date: req.body.birth_date,
			address: {
		    street: [req.body.street],
		    city: [req.body.city],
		    postal_code: [req.body.postal_code],
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

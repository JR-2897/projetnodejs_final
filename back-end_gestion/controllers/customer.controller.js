const Customer = require ('../models/customer.model.js');

//Function create customer
exports.createCustomer = (req, res) => {
	let customer = new Customer(
		{
      company: req.body.company,
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
		    postal_code: req.body.address.postal_code
      },
      contact: {
        name: req.body.contact.name,
        first_name: req.body.contact.first_name,
        phone_number: req.body.contact.phone_number,
        email_address: req.body.contact.email_address
      },
      business_line: req.body.business_line
		}
	);
	customer.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("Client créé");
		}
		res.send(customer);
	})
}

//Print all customers
exports.allCustomers = (req, res) => {
	Customer.find((err, customer) => {
		if(err) {
			console.log(err);
		}
		res.send(customer);
	})
}

//Print one customer
exports.oneCustomer = (req, res) => {
	Customer.findById(req.params.id, (err, customer) => {
		if(err) {
			console.log(err);
		}
		res.send(customer);
	})
}

//Remove one project
exports.removeCustomer = (req, res) => {
	Customer.findByIdAndRemove(req.params.id, (err, customer) => {
		if(err) {
			console.log(err);
		}
		res.send("Client supprimé");
	})
}

//Update one customer
exports.updateCustomer = (req, res) => {
	Customer.findByIdAndUpdate(req.params.id, req.body, (err, customer) => {
		if(err) {
			console.log(err);
		}
		res.send("Client modifié");
	})
}

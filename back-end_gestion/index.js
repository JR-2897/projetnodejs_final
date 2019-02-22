const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const employeeController = require ('./controllers/employee.controller.js');
const customerController = require ('./controllers/customer.controller.js');
const projectController = require ('./controllers/project.controller.js')

app.use(function(req, res, next) {
	res.setHeader('Content-type','application/json');
	res.setHeader('Accept','application/json');
	res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers','Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
	next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect('mongodb://admin:a0a0a0a0a0a0@ds147225.mlab.com:47225/bd-evalfinal', (err) => {
	if(err) {
		console.log('Database not found');
	}
	else {
		console.log('Database connected');
	}
});

//Routes employees
app.post('/api/v1/employees', employeeController.createEmployee);
app.get('/api/v1/employees', employeeController.allEmployees);
app.get('/api/v1/employees/:id', employeeController.oneEmployee);
app.delete('/api/v1/employees/:id', employeeController.removeEmployee);
app.put('/api/v1/employees/:id', employeeController.updateEmployee);

//Routes customers
app.post('/api/v1/customers', customerController.createCustomer);
app.get('/api/v1/customers', customerController.allCustomers);
app.get('/api/v1/customers/:id', customerController.oneCustomer);
app.delete('/api/v1/customers/:id', customerController.removeCustomer);
app.put('/api/v1/customers/:id', customerController.updateCustomer);

//Routes projects
app.post('/api/v1/projects', projectController.createProject);
app.get('/api/v1/projects', projectController.allProjects);
app.get('/api/v1/projects/:id', projectController.oneProject);
app.delete('/api/v1/projects/:id', projectController.removeProject);
app.put('/api/v1/projects/:id', projectController.updateProject);


app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})

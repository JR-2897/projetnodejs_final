const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

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

mongoose.connect('mongodb://admin:a0a0a0a0a0a0@ds125525.mlab.com:25525/evalfinal-user', (err) => {
	if(err) {
		console.log('Database not found');
	}
	else {
		console.log('Database connected');
	}
});

app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})

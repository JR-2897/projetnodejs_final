const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema ({

  name: String,
  first_name: String,
  username: String,
  birth_date: Date,
  address: {
    street: String,
    city: String,
    postal_code: Number
  },
  phone_number: String,
  email_address: String,
  office: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);

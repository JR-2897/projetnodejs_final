const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema ({

  company: String,
  address: {
    street: String,
    city: String,
    postal_code: Number
  },
  contact: {
    name: String,
    first_name: String,
    phone_number: String,
    email_address: String
  },
  business_line: String
});

module.exports = mongoose.model('Customer', CustomerSchema);

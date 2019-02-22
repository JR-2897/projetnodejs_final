const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema ({

  name: String,
  description: String,
  begin_date: String,
  end_date: String,
  total_cost: Number,
  status: String

});

module.exports = mongoose.model('Project', ProjectSchema);

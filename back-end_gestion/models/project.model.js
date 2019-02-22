const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjectSchema = new Schema ({

  name: String,
  description: String,
  begin_date: Date,
  end_date: Date,
  total_cost: Number,
  status: String

});

module.exports = mongoose.model('Project', ProjectSchema);

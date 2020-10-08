const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// SAVING ACTIVITIES SCHEMA FOR MONGODB
const activitiesSchema = new Schema({
  name: String,
  users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
});

module.exports = mongoose.model('activities', activitiesSchema);

// coffee: [{user_id: 524535, description: "i like black coffee"}]

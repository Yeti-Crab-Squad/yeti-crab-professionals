const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://woof:codesmith123@woof.qaamj.mongodb.net/woof?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO MONGO DB'))
  .catch((err) => console.log(err));



const Schema = mongoose.Schema;

// SAVING USER SCHEMA FOR MONGODB
const usersSchema = new Schema({
  full_name: { type: String, required: true },
  first_name: String,
  email: String,
  profile_img: String,
  user_age: Number,
  location: String,
  dog_name: String,
  dog_image: String,
  dog_age: Number,
  dog_size: String,
  dog_breed: String,
  preferred_activities: [{ activity: String, description: String }],
  //timestamps: true,
});

const User = mongoose.model('Woof-users', usersSchema);


module.exports = User;

//  preferred_activities: [{activity: "coffee", description: "i like it black"}, {activity: "beach", description: "a day under the sun"}, {activity: "hiking", description: "conversation time for our pets"}]

// /login
// /register
// / setProfile
// / main

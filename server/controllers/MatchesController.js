const User = require('../models/UserModels');
const Activities  = require('../models/ActivitiesModels');

const matchesController = {};

// FINDING AN ACTIVITIES MATCH FOR THE USER BASED ON USER ID. 

matchesController.userActivities = (req, res, next) => {
  console.log(`Requesting for user data`);
  const { userID } = req.body;
  User.findById(userID, (err, user) => {
    if (err) {
      return next({ err });
    }
    const activities = user.preferred_activities;
    // Getting an array of the user's activities
    const activitiesArray = activities.map((activity) => {
      return activity.activity;
    });
    res.locals.activities = activitiesArray;
    // console.log(res.locals.activities)
    console.log(res.locals.activities);
    next();
  });
};

matchesController.getUniqueIds = (req, res, next) => {
  console.log(`Requesting for activities array`);
  const { activities } = res.locals;
  // console.log(activities)

  // const matchesArray = []
  Activities
      .find({ name: {$in: activities} })
      .then(users => {
        // Loop through array of activities to extract the ids. Expect to receive an array of IDs that are not duplicates
        const arrayOfIds = []
        users.forEach((activity) => {
          arrayOfIds.push(activity.users)
        })
        // Return a flattened array of IDs with no duplicates. Save result to res.locals
        // const uniqueIds = new Set(arrayOfIds.flat());
        res.locals.uniqueIds = arrayOfIds.flat();
        console.log('uniqueIDs --> ', res.locals.uniqueIds)
        next();
      }).catch(err => {
        console.log(err)
      })
}

//Return list of users with this array
matchesController.returnMatches = (req, res, next) => {
  console.log(`Returning Matches`);
  const { uniqueIds } = res.locals;
  console.log(res.locals.uniqueIds);
  console.log(typeof res.locals.uniqueIds[0].toString());
  
  // const idString = uniqueIds.map((id) => id.toString())
  // console.log(idString)
  
  //Find users based on input ID
  User.find({
    _id: { $in: uniqueIds },
  })
    .then((data) => {
      console.log(data);
      // const matchingUserInfo = [];
      // data.forEach((user) => {
      //   matchingUserInfo.push(user.first_name);
      // });
      // console.log(matchingUserInfo);
    })
    .catch((err) => {
      console.log(err);
    });

}


module.exports = matchesController;


// Query a user from the database with a given UserID
  //Expect: Access to the woof-users.preferred_activities Array.
    // To do: Loop through array to get access to keys
    //        Retrieve the list of activities in an array --> ['coffee', 'beach']

// Query the activities database

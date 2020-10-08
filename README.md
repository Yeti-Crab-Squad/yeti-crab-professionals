# yeti-crab-professionals

Routes

/api/login
  * POST 
  * request - FB login object
  * response - object with user data

/api/getUserData/userID
  * GET
  * put userID string from mongo in params
  * response - object with user data

/api/updateUserData/userID
  * PUT
  * put userID string from mongo in params
  * request - user object with updated user data
  * response - object with user data


******* STRETCH FEATURE *******

/api/deleteUser/userID
  * DELETE
  * put userID string from mongo in params

/** =================================
                Packages
**==================================*/

const mongoose  = require('mongoose');
var bcrypt = require('bcryptjs');

var Admin = require('../../models/admin');

/** =================================
                Body
**==================================*/

mongoose.Promise = global.Promise;

/** create new admin */
var createNewAdmin = function () {
  const userName = "testuser";
  const pass = "abc123";
  bcrypt.genSalt(10,(err,salt) => {
    bcrypt.hash(pass,salt,(err,hash) => {
      const hashedPass = hash;
      const newAdmin = new Admin({
        "username" : userName,
        "password" : hashedPass,
      });
      console.log(newAdmin)
      newAdmin.save()
        .then(() => console.log("Created new admin"))
        .catch((err) => console.log(err));
      }); 
  
})
}
  
module.exports = createNewAdmin;
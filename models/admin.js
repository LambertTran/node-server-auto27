var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var auto27Db = require('../db/auto27');

var AdminSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});


AdminSchema.statics.validateAdmin = (username,callback) => {
  Admin.findOne({username:username},callback);  
}

AdminSchema.statics.validatePassword = (password,adminPass,callback) => {
  bcrypt.compare(password, adminPass, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
  });
}

AdminSchema.statics.getAdminById = (id,callback) => {
  Admin.findById(id,callback);
}

var Admin = auto27Db.model('admins',AdminSchema);

module.exports = Admin;
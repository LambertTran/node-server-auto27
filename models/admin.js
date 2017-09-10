var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

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

var Admin =module.exports= mongoose.model('admin',AdminSchema);

module.exports.validateAdmin = (username,callback) => {
  Admin.findOne({username:username},callback);  
}

module.exports.validatePassword = (password,adminPass,callback) => {
  bcrypt.compare(password, adminPass, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
  });
}

module.exports.getAdminById = (id,callback) => {
  Admin.findById(id,callback);
}

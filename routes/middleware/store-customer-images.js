/** =================================
                Packages
**==================================*/

const mongoose  = require('mongoose');
var {CustomerImages} = require('../../models/customer');

/** =================================
                Body
**==================================*/
/** database **/
mongoose.Promise = global.Promise;

/** store paths of images and title to database */
var storeCustomerImages = function(req){
  var urls = req.files.map((file) => file.location);
  
  var paths = new CustomerImages({
    paths:urls
  });

  return paths.save()
    .then(() => {return Promise.resolve()})
    .catch((err) => {return Promise.reject()});
}
module.exports = storeCustomerImages;
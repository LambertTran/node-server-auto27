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

var deleteCustomerImage = function(id){
  return CustomerImages.deleteOne({_id:id})
    .then(() => {return Promise.resolve()})
    .catch((err) => {return Promise.reject()});
}

module.exports = deleteCustomerImage;
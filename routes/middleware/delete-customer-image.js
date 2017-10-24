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
const URL= "mongodb://auto27:password@ds141098.mlab.com:41098/car-dealer-database";
mongoose.connect(URL,['customers']);


var deleteCustomerImage = function(id){
  return CustomerImages.deleteOne({_id:id})
    .then(() => {return Promise.resolve()})
    .catch((err) => {return Promise.reject()});
}

module.exports = deleteCustomerImage;
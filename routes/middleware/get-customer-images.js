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

var getCustomerImages = () => {
  return CustomerImages.find()
    .then((customer) => {
      return Promise.resolve(customer);
    })
    .catch((err) => { return Promise.reject()})
}


module.exports = getCustomerImages;
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

var getCustomerImages = () => {
  return CustomerImages.find()
    .then((customer) => {
      return Promise.resolve(customer);
    })
    .catch((err) => { return Promise.reject()})
}


module.exports = getCustomerImages;
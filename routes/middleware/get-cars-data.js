/** =================================
                Packages
**==================================*/

const mongoose  = require('mongoose');
var {CarData} = require('../../models/cars');

/** =================================
                Body
**==================================*/

/** database **/
mongoose.Promise = global.Promise;

var getCarsData = () => {
  return CarData.find()
    .then((cars) => {
      return Promise.resolve(cars);
    })
    .catch((err) => { return Promise.reject()})
}


module.exports = getCarsData;
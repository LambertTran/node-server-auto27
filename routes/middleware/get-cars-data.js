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
const URL= "mongodb://auto27:password@ds141098.mlab.com:41098/car-dealer-database";
mongoose.connect(URL,['cars']);

var getCarsData = () => {
  return CarData.find()
    .then((cars) => {
      return Promise.resolve(cars);
    })
    .catch((err) => { return Promise.reject()})
}


module.exports = getCarsData;
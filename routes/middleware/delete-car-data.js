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


var deleteCar = function(id){
  return CarData.deleteOne({_id:id})
    .then(() => {return Promise.resolve()})
    .catch((err) => {return Promise.reject()});
}

module.exports = deleteCar;
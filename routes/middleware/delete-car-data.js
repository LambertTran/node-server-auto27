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

var deleteCar = function(id){
  return CarData.deleteOne({_id:id})
    .then(() => {return Promise.resolve()})
    .catch((err) => {return Promise.reject()});
}

module.exports = deleteCar;
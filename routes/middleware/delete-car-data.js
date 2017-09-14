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
const URL= 'mongodb://alirom93:Lamson123@ds127443.mlab.com:27443/todo_list';
mongoose.connect(URL,['cars']);


var deleteCar = function(id){
  return CarData.deleteOne({_id:id})
    .then(() => {return Promise.resolve()})
    .catch((err) => {return Promise.reject()});
}

module.exports = deleteCar;
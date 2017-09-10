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

var getCarsData = () => {
  return CarData.find()
    .then((cars) => {
      return Promise.resolve(cars);
    })
    .catch((err) => { return Promise.reject()})
}


module.exports = getCarsData;
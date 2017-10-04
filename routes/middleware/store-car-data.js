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

/** store paths of images and title to database */
var storeCarData = function(req){
  var urls = req.files.map((file) => file.location);

  var path = new CarData({
    "name":req.body.name,
    "year":req.body.year,
    "price":req.body.price,
    "status":req.body.status,
    "odometer":req.body.odometer,
    "transmission":req.body.transmission,
    "description":req.body.description,
    "paths":urls
  })

  // save to database
  return path.save()
    .then(() => { return Promise.resolve() })
    .catch((err) => { return Promise.reject() })
}

module.exports = storeCarData;
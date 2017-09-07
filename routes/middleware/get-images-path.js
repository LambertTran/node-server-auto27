/** =================================
                Packages
**==================================*/

const mongoose  = require('mongoose');
var {ImagePath} = require('../models/image-path');

/** =================================
                Body
**==================================*/
/** database **/
mongoose.Promise = global.Promise;
const URL= 'mongodb://alirom93:Lamson123@ds127443.mlab.com:27443/todo_list';
mongoose.connect(URL,['path']);

var getPaths = (title) => {

  return ImagePath.findOne({title:title})
    .then((dataPath) => {
      return Promise.resolve(dataPath.paths);
    })
    .catch((err) => { return Promise.reject()})
}


module.exports = getPaths;
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

/** store paths of images and title to database */
var storePaths = function(req){
  var urls = req.files.map((file) => file.location);
  var path = new ImagePath({
    "title":req.body.title,
    "paths":urls
  })

  // save to database
  return path.save()
    .then((doc) => { return Promise.resolve() })
    .catch((err) => { return Promise.reject() })
}

module.exports = storePaths;
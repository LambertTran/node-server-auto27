/** =================================
                Packages
**==================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** =================================
                Body
**==================================*/
/** define model of paths of images in database */
var ImagePathSchema = new Schema({
  title:{
    type:String
  },
  paths:[]
})

var ImagePath = mongoose.model('path',ImagePathSchema); 
module.exports = {ImagePath}
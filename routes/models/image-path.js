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

var ImagePath = mongoose.model('cars',ImagePathSchema); 
module.exports = {ImagePath}
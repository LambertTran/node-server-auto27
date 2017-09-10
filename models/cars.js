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
  name:{
    type:String
  },
  year:{
    type:Number
  },
  status:{
    type:String
  },
  odometer:{
    type:Number
  },
  transmission:{
    type:String
  },
  description:{
    type:String
  },
  paths:[]
})

var CarData = mongoose.model('cars',ImagePathSchema); 
module.exports = {CarData}
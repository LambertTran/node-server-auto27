/** =================================
                Packages
**==================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var auto27Db = require('../db/auto27');

/** =================================
                Body
**==================================*/
/** define model of paths of images in database */
var ImagePathSchema = new Schema({
  name:{
    type:String
  },
  price:{
    type:Number
  },
  year:{
    type:Number
  },
  status:{
    type:String
  },
  odometer:{
    type:String
  },
  transmission:{
    type:String
  },
  description:{
    type:String
  },
  paths:[]
})

var CarData = auto27Db.model('cars',ImagePathSchema); 
module.exports = {CarData}
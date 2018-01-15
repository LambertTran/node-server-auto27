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
var CustomerImagesSchema = new Schema({
  paths:[]
})

var CustomerImages = auto27Db.model('customers',CustomerImagesSchema);
module.exports = {CustomerImages};
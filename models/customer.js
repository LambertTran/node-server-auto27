/** =================================
                Packages
**==================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** =================================
                Body
**==================================*/

/** define model of paths of images in database */
var CustomerImagesSchema = new Schema({
  paths:[]
})

var CustomerImages = mongoose.model('customers',CustomerImagesSchema);
module.exports = {CustomerImages};
'use strict';
/** =================================
                Packages
**==================================*/

const express = require('express');
const router  = express.Router();

var {upload} = require('./storages/upload-aws');
var storeCarData = require('./middleware/store-car-data')
var getCarsData = require('./middleware/get-cars-data')

/** =================================
                Body
**==================================*/

/** upload images */
router.post('/cars', upload.array('img'), (req, res) => {
  storeCarData(req)
    .then(() => res.status(200).send('uploaded'))
    .catch((err) => res.status(400).send('cant uploaded'))
});

/** retrieve images path */
router.get('/cars',(req,res) => {
  getCarsData(req.params.title)
    .then((cars) => res.status(200).send(cars))
    .catch((err) => res.status(400).send(err))
})

module.exports = router ;
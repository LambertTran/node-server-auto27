'use strict';
/** =================================
                Packages
**==================================*/

const express = require('express');
const router  = express.Router();


var getCarsData = require('./middleware/get-cars-data')

/** =================================
                Body
**==================================*/


/** retrieve images path */
router.get('/cars',(req,res) => {
  getCarsData()
    .then((cars) => res.status(200).send(cars))
    .catch((err) => res.status(400).send(err))
})

module.exports = router ;
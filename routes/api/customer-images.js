'use strict';
/** =================================
                Packages
**==================================*/

const express = require('express');
const router  = express.Router();


var getCustomerImages = require('../middleware/get-customer-images');

/** =================================
                Body
**==================================*/


/** retrieve images path */
router.get('/customers',(req,res) => {
  getCustomerImages()
    .then((customers) => res.status(200).send(customers))
    .catch((err) => res.status(400).send(err))
})

module.exports = router ;
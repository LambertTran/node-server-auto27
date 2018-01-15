'use strict';
/** =================================
                Packages
**==================================*/
const express = require('express');
const router  = express.Router();

var {upload} = require('../../aws/upload-aws');
var {uploadCustomer} = require('../../aws/upload-aws');
var verifyAuth = require ('../middleware/verify-auth');

// Admin
var createNewAdmin = require('../middleware/create-admin');
// Car
var storeCarData = require('../middleware/store-car-data');
var storeCustomerImages = require('../middleware/store-customer-images');
var getCarsData = require('../middleware/get-cars-data');
var deleteCar = require('../middleware/delete-car-data');

// Customer
var getCustomerImages = require('../middleware/get-customer-images');
var deleteCustomerImage= require('../middleware/delete-customer-image');

/** =================================
                Body
**==================================*/

/** dashboard **/
router.get('/', verifyAuth ,(req,res) => {
  getCarsData()
  .then((cars) => {
    res.render('dashboard',{cars:cars});
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

/** create new admin */
// router.post('/', (req,res) => {
//   createNewAdmin();
// })



/** upload cars data **/
router.get('/upload',verifyAuth,(req,res) => {
  res.render('upload');
});

router.post('/upload', verifyAuth , upload.array('img'), (req, res) => {
  storeCarData(req)
    .then(() => {
      res.status(200).redirect('/admin')
    })
    .catch((err) => res.status(400).send('cant uploaded'));
});

/** customer iamges **/
router.get('/customerimages',verifyAuth,(req,res) => {
  getCustomerImages()
    .then(customers => {
    res.render('customerimages',{customers:customers});
    })
    .catch((err) => {
      res.status(404).send(err);
    })
});

/** upload customer images **/
router.get('/customers', verifyAuth, (req,res) => {
  res.render('customers')
});

router.post('/customers', verifyAuth , uploadCustomer.array('img'), (req, res) => {
  storeCustomerImages(req)
    .then(() => {
      res.status(200).redirect('/admin/customerimages')
    })
    .catch((err) => res.status(400).send('cant uploaded'));
});


/** delete route **/
router.post('/delete/:id',verifyAuth, (req,res) => {
  var id = req.params.id;
  deleteCar(id)
    .then(() => res.status(200).redirect('/admin'))
    .catch((err) => res.status(400).redirect('/admin'));
});

router.post('/delete/customer/:id',verifyAuth,(req,res) => {
  var id = req.params.id;
  deleteCustomerImage(id)
    .then(() => res.status(200).redirect('/admin/customerimages'))
    .catch((err) => res.status(400).redirect('/admin/customerimages'));
})

module.exports= router;
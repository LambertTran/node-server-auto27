'use strict';
/** =================================
                Packages
**==================================*/
const express = require('express');
const router  = express.Router();

var upload = require('./storages/upload-aws');
var verifyAuth = require ('./middleware/verify-auth');

var storeCarData = require('./middleware/store-car-data')
var getCarsData = require('./middleware/get-cars-data')
var deleteCar = require('./middleware/delete-car-data')


/** =================================
                Body
**==================================*/




router.get('/', verifyAuth ,(req,res) => {
  getCarsData().then((cars) => {
    res.render('dashboard',{cars:cars});
  })
})

router.get('/upload',verifyAuth,(req,res) => {
  res.render('upload');
})

router.post('/upload', verifyAuth , upload.array('img'), (req, res) => {
  storeCarData(req)
    .then(() => {
      res.status(200).redirect('/admin')
    })
    .catch((err) => res.status(400).send('cant uploaded'))
});

router.post('/delete/:id',verifyAuth, (req,res) => {
  var id = req.params.id;
  deleteCar(id)
    .then(() => res.status(200).redirect('/admin'))
    .catch((err) => res.status(400).redirect('/admin'));
});


module.exports= router;
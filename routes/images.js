'use strict';
/** =================================
                Packages
**==================================*/

const express = require('express');
const router  = express.Router();

var {upload} = require('./storages/upload-aws');
var storePaths = require('./middleware/store-image-path')
var getPaths = require('./middleware/get-images-path')

/** =================================
                Body
**==================================*/

/** upload images */
router.post('/images', upload.array('img'), (req, res) => {
  storePaths(req)
    .then(() => res.status(200).send('uploaded'))
    .catch((err) => res.status(400).send('cant uploaded'))
});

/** retrieve images path */
router.get('/images/:title',(req,res) => {
  getPaths(req.params.title)
    .then((paths) => res.status(200).send(paths))
    .catch((err) => res.status(400).send(err))
})

module.exports = router ;
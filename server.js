'use strict';
/** =================================
                Packages
**==================================*/


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/** import routers */
var  images  = require('./routes/images'); 

/** =================================
                Body
**==================================*/

var router = express.Router();
var app = express();
var port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname))

app.use('/',images);

app.listen(port, () => console.log(`connect to ${port}`));
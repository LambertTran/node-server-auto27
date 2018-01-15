var mongoose = require('mongoose');
const URL = 'mongodb://auto27user:dev123@ds255797.mlab.com:55797/auto27';
const auto27Db = mongoose.createConnection(URL,{useMongoClient: true});

module.exports = auto27Db;
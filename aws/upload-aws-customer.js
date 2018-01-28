/** =================================
                Packages
**==================================*/
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const awsCredentials = require('../identity/aws');

/** =================================
                Body
**==================================*/

/** config s3 */
AWS.config.update({
    secretAccessKey: awsCredentials.secretAccessKey,
    accessKeyId: awsCredentials.accessKeyId,
    region: 'us-east-1'
})


var s3 = new AWS.S3();

/** handle upload images */
var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'images-storage-cardealer',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            var name = Date.now().toString() + file.originalname;
            cb(null, name);
        }
    })
});

module.exports = upload;
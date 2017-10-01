'use strict';
/** =================================
                Packages
**==================================*/

const express = require('express');
const router  = express.Router();
const nodemailer = require('nodemailer');

/** =================================
                Body
**==================================*/

router.post('/sendemail',(req,res) => {
  nodemailer.createTestAccount((err,account) =>{
    
    let transporter = nodemailer.createTransport({
      host:"smtp.ethereal.email",
      port:587,
      secure:false,
      auth:{
        user:account.user,
        pass:account.pass
      }
    });

    let mailOptions = {
      from:"car-dealer",
      to: "lb.tran648@gmail.com",
      subject:"Someone needs you",
      text:"test"
    }
    
    transporter.sendMail(mailOptions,(err,info) => {
      if(err){
        return console.log(err);
      }
      console.log("sent it")
    })
  });
})

module.exports = router;

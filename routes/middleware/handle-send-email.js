const nodemailer = require('nodemailer');

var handleSendEmail = (message) =>{
    let transporter = nodemailer.createTransport({
      service:'gmail',
      host:'smtp.gmail.com',
      auth:{
        user:'dev.email.lbt@gmail.com',
        pass:'webdev123'
      }
    });

    let mailOptions = {
      from:"car-dealer",
      to: "lb.tran648@gmail.com",
      subject:"Someone needs you",
      text: message
    }
    
    transporter.sendMail(mailOptions,(err,info) => {
      if(err){
        return console.log(err);
      }
      console.log("sent it")
    })
}

module.exports = handleSendEmail;
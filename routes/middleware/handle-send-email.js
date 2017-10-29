const nodemailer = require('nodemailer');

var handleSendEmail = (message) =>{
    let transporter = nodemailer.createTransport({
      service:'gmail',
      host:'smtp.gmail.com',
      auth:{
        user:'auto27sacramento@gmail.com',
        pass:'cocopolo'
      }
    });

    let mailOptions = {
      from:"car-dealer",
      to: "auto27sacramento@gmail.com",
      subject:"Customer Contact",
      text: message
    }
    
    return transporter.sendMail(mailOptions).then(() => {return Promise.resolve()})
}

module.exports = handleSendEmail;
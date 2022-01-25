"use strict";
const nodemailer = require('nodemailer');

const sendMail= async(req, res) => {
    // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'donatuschike@gmail.com', // generated ethereal user
      pass: 'gnencovfiferqjfb', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Calm Global" <no-reply@kokomdapp.com>', // sender address
    to: req.body.receiver, // list of receivers
    subject: req.body.subject, // Subject line
    html: req.body.message, // plain text body
    // html: "<b>Hello world?</b>", // html body
  }).then(function (response) {
    // console.log(response)
    res.status(200).send("Email Delivered")
  }).catch(function (error) {
    console.log(error);
    res.status(500).send("Email not Delivered")
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // res.status(200).send("Email Delivered")
    // res.send('Hello World! Lets get started')
}

// sendMail().catch(console.error);

module.exports = {
    sendMail
}
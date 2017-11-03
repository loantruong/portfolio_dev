const nodemailer = require('nodemailer');
const Email = require('email-templates');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'Gmail', 
  auth: {
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASSWORD || ''
  }
});

let mailOptions = {
  from: 'Loan <loancrea@gmail.com>',
  to: 'loancrea@gmail.com',
  subject: 'contact',
  text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+ 'Message: '+req.body.message,
  html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if(error){
    console.log(error);
    res.redirect('/');
  } else {
    console.log('Message Sent: '+info.response);
    res.redirect('/');
  }
});
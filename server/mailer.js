const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const sendMailer= async (message)=>{
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL, // generated ethereal user
      pass: process.env.GMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Camech <camech@smu.tn>', // sender address
    to: "yahbouss@hotmail.fr",
    subject: "test", // Subject line
    text: `${message.name} with mail ${message.email} with message = ${message.message}`
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = sendMailer
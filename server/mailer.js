const nodemailer = require('nodemailer')


const sendMailer= async (message)=>{
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL, // generated ethereal user
      pass: process.env.GMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: 'Caméch <camech@smu.tn>', // sender address
    to: "enactus@smu.tn",
    subject: "Contact Us form - Caméch, New Message !", // Subject line
    text: `
    You have recieved a new message from ${message.name} - ${message.email}
    the message content: 

    ${message.message}

    Don't forget to reply to the mail

    Best Regards,
    Developer - Yahia Boussaid
    `
  }).catch(err =>console.log(err))

  await transporter.sendMail({
    from: 'Caméch <camech@smu.tn>', // sender address
    to: message.email,
    subject: "Thank you for contacting Caméch", // Subject line
    text: `
    Dear ${message.name},

    Thank you for contacting Caméch! We will be sure that we recieved your message and we will get back to you soon

    your message content:

    ${message.message}

    Best reagrds,
    Yahia Boussaid - Head COM Enactus
    `
  }).catch(err =>console.log(err))
}

module.exports = sendMailer
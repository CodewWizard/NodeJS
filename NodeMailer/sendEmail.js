const nodemailer = require("nodemailer")

const sendEmail = async(request, response)=>{
    let testAccount = await nodemailer.createTestAccount();

    // connect with the SMTP
    let transporter = await nodemailer.createTransport({
        host : "smtp.ethereal.email",
        port : 587,
        auth : {
            user: 'shanie.oconner5@ethereal.email',
            pass: 'ne7vfGWGn4gWHWe28y'
        }
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "madihamujawar410@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log('message send : %s', info.messageId);
    
    response.json(info);
}

// exports file

module.exports = sendEmail;
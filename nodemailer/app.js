const  nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'balatonyi.martin@gmail.com',
        pass: 'ntuy sevp ybwl jydg',
    }
});
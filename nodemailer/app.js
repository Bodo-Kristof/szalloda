const  nodeMailer = require('nodemailer');

const html = `
        Regisztráció
        Sikeresen regisztrált az oldalunkra!!
`;
//Email küldő beállítása
const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'balatonyi.martin@gmail.com',
        pass: 'ntuy sevp ybwl jydg',
    }
});

const  mailOptions = {
    to: 'balatoni.martin@szbiszeged.hu',
    subject: 'Sikeres regisztráció',
    text: html
}

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent');
    }
});
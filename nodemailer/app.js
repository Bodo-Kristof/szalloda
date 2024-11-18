const  nodeMailer = require('nodemailer');

// Az email tartalma
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

// Az email végpontja, subject-je és tartalma
const  mailOptions = {
    to: 'balatoni.martin@szbiszeged.hu',
    subject: 'Sikeres regisztráció',
    text: html
}

//console log
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent');
    }
});
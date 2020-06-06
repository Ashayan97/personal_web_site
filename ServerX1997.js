
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');


const app = express();

app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/HomePage.html'));
});
app.get('/blog', function(req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/BlogPage.html'));
});
app.get('/homepage', function(req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/HomePage.html'));
});
app.get('/cv', function(req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/CV.pdf'));
});

app.post('/send', function (req,res) {
    const ans='' +
        '<h2> new message </h2> <br>' +
        '<h4>name:</h4>${req.body.name}<br><br>' +
        '<h4>message:</h4>${req.body.message}<br>'


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sshayan1997@gmail.com', // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
})

app.listen(8080);
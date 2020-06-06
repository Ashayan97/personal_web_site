const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/HomePage.html'));
});
app.get('/blog', function (req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/BlogPage.html'));
});
app.get('/homepage', function (req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/HomePage.html'));
});
app.get('/cv', function (req, res) {
    app.use(express.static(path.join(__dirname, '/')));
    res.sendFile(path.join(__dirname + '/CV.pdf'));
});

app.post('/send', function (req, res) {
    var name = req.body.name;
    var message = req.body.message;
    const ans = "" +
        "<h2> new message </h2> <br>" +
        "<h4>name:</h4> " +
        name +
        "<br>" +
        "<br>" +
        "<h4>message:</h4>" +
        message +
        "<br>"


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'site.shayan@gmail.com', // generated ethereal user
            pass: '', // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let mailOption = {
        from: '"Web Site👻" <sshayan1997@gmail.com>', // sender address
        to: "sshayan1997@gmail.com", // list of receivers
        subject: "new message from site", // Subject line
        text: "check your site :)", // plain text body
        html: ans, // html body
    };

    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.render(homepage, {msg: " massage send :)"});
    });

});

app.listen(8080);
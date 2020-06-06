// var http = require('http');
// var url = require('url');
// var fs = require('fs');
//
// // app.use(express.static(path.join(__dirname, 'public')));
//
// http.createServer(
//     function (req, res) {
//         var header_type = "";
//         var data = "";
//         var q = url.parse(req.url, true);
//         var address = q.pathname;
//         if (address == "/") {
//             // fs.readFile('PageStyle.css', function (err, data2) {
//             //     res.writeHead(200, {'Content-Type': 'text/css'});
//             //     fs.readFile('HomePage.html', function (err, data) {
//             //         res.writeHead(200, {'Content-Type': 'text/html'});
//             //         res.write(data);
//             //         res.write(data2);
//             //         res.end();
//             //     });
//             // });
//
//             var render = function (resource) {
//                 // resource = name of resource (i.e. index, site.min, jquery.min)
//                 fs.readFile(__dirname + "/" + resource, function (err, file) {
//                     if (err) return false; // Do something with the error....
//                     header_type = ""; // Do some checking to find out what header type you must send.
//                     data = file;
//                 });
//             };
//
//             get( function (req, res, next) {
//                 // Send out the index.html
//                 render('HomePage.html');
//                 next();
//             });
//
//
//             get( function (req, res, next) {
//                 render('PageStyle.css');
//                 next();
//             });
//         } else {
//             if (address == "/blog") {
//                 fs.readFile('BlogPage.html', function (err, data) {
//                     res.writeHead(200, {'Content-Type': 'text/html'});
//                     res.write(data);
//                     res.end();
//                 });
//             } else if (address == "/cv" || address == "/CV" || address == "/Cv" || address == "/cV") {
//                 fs.readFile('CV.pdf', function (err, data) {
//                     res.writeHead(200, {'Content-Type': 'text/html'});
//                     res.write(data);
//                     res.end();
//                 });
//             } else {
//                 fs.readFile('404.html', function (err, data) {
//                     res.writeHead(200, {'Content-Type': 'text/html'});
//                     res.write(data);
//                     res.end();
//                 });
//             }
//         }
//
//     }).listen(8080);



var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080

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
app.listen(8080);
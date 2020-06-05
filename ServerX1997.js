var http = require('http');
var url = require('url');
var fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(
    function (req, res) {
    var q = url.parse(req.url, true);
    var address = q.pathname;
    if (address == "/") {
        fs.readFile('HomePage.html', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        if (address == "/blog") {
            fs.readFile('BlogPage.html', function (err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
        } else if (address == "/cv" || address == "/CV" || address == "/Cv" || address == "/cV") {
            fs.readFile('CV.pdf', function (err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
        } else {
            fs.readFile('404.html', function (err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            });
        }
    }

}).listen(8080);
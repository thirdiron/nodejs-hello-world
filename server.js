var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`Hello World! I was started with args: ${JSON.stringify(process.argv.slice(2))}`);

});

const port = process.env.PORT;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

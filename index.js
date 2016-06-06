/**
 * Created by ronwislizki on 6/1/16.
 */


var http = require('http');

var server = http.createServer(function (req,res){

res.writeHead(200, {'content-Type': 'text/plain'});


switch (req.url) {
    case'/':
        res.write('<h1>hi</h1>');
        break;
    case'/bye':
        res.write('bye');
        break;
        default:
    //404

}
res.end();

});

server.listen(8080);
console.log('you can listen at http://localhost:8080');

/**
 * Created by ronwislizki on 6/1/16.
 */

var express = require ('express');

var bodyParser= require('body-parser');


var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.post('/',function(req,res) {

    console.log(req, res);

    res.end('{"hello" : "world"}');

});

app.get('bye',function(req,res){

    res.end('bye');

});

app.listen(8080);

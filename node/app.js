var path = require('path')
var express = require('express')
var opn = require('opn')
var bodyParser = require('body-parser');
// var multer = require('multer'); 
const test = require('./routers/router')
var PORT = 3008
var app = express()
//设置跨域访问  
app.all('/test/*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    // res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
}); 
app.use(bodyParser.json());
app.use('/test',test)



app.use(express.static(path.join(__dirname, '../dist')))

module.exports = app.listen(PORT, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + PORT
    console.log('Listening at ' + uri + '\n')
    // opn(uri)
})





var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
//var todos = require('./routes/todos');
const exec = require('child_process').exec;



var app = express();
// View Engine

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/public", express.static(__dirname + "/public"));
app.use('/',index);
app.use('/manage',index);
app.listen(3000,function(){
  console.log('Server started on port 3000...')
});
app.post('/plan', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  //let cmd = exec('dir');
  exec('dir', (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(stderr);
      return;
    }
    console.log(stdout);
    res.json(stdout);
  });
});

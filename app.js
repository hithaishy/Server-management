var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
//var todos = require('./routes/todos');
const exec = require('child_process').exec;



var app = express();
// View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));
app.use('/', index);
app.use('/manage', index);
app.listen(3000, function () {
  console.log('Server started on port 3000...')
});
app.post('/manage', (req, res) => {
  const click = { clickTime: new Date() };
  //console.log(click);
  //let cmd = exec('dir');
  let pwd = req.body.pwd.cwd;
  
  let action = req.body.pwd.action;
   console.log(action)

  exec(`cd ${pwd} && terraform ${action} -lock=false 2>&1 | tee -a /tmp/mylog 2>/dev/null >/dev/null &`, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(stderr);
      return;
    }
    //onsole.log(stdout + "here first");
    console.log(req.body)
    //console.log(stdout);
    res.send((stdout));
  });
});

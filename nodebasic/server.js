const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.set('view-engine','ejs')
app.use(express.urlencoded({extended : false}))

app.get('/',(req,res) => {
  res.render('home.ejs')
})

app.get('/login',(req,res) => {
  res.render('login.ejs')
})

app.post('/login',(req,res) => {

})



app.get('/register',(req,res) => {
  res.render('register.ejs')
})

app.post('/register', async(req,res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.passowrd,10)
    users.push({
      id:Date.now().toString(),
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    })
    res.redirect('/login')
  }catch{
    res.redirect('/register')
  }
  console.log(users)
})

app.listen(3000)
























// var http = require('http');
// var evaluate = require('./evaluate');  //----modules
// var custom = require('./custom');       //-----modules  

// function onrequest (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.write('\n'+evaluate.sum(4,5));
//   res.write('\n'+evaluate.str);
//   res.write('\n'+evaluate.mul(5,5));
//   res.write('\n'+evaluate.str1);
//   res.write('\n'+custom.dt());
//   res.end();
// } 

// http.createServer(onrequest).listen(8080);
// console.log("server created");
//  //  //  //  //  USING PUG  //   //  //  //  //

// const express = require('express');
// const app = express();

// app.set('view engine','pug');
// app.set('views','./views');

// app.get('/',function(req,res){

//     var person={                //if else condition
//         name : "shina",
//         city : "indore",
//     };
//     res.render('example',{
//         data:person
//     });
// });


const express = require('express');
const student = require ('./student');
const app = express();
const fs = require('fs');
app.use(express.json())


app.listen(3000,()=>{
    console.log('port 3000');
})

app.get('/',(req,res)=>{
    res.json({message:'API Run'});
}) 


app.get('/student',(req,res)=>{
    res.json(student);
})

    
app.post('/api/student',(req,res)=>{
        if(!req.body.email){
            res.status(400)
            return res.json({error : "email is required"})
        }
    const user ={
        id : student.length+1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email
    }

    student.push(user)
    console.log(req.body);
    res.json(user)
    res.json(user)
})

fs.writeFile('./newstudent.json',JSON.stringify(student,null,2),err => {
    if(err){
        console.log(err);
    }
    else{
        console.log('file successfully written!!!');
    }
});






// const express = require('express');
// const app = express();

// function logInfo(req,res,next){
//     console.log('hey i am middleware');
//     next();
// };

// function add(req,res,next){
//     var person ={
//         name : "john",
//         city : "ujjain"
//     };

//     req.person =person;
//     next();
// };

// app.use(logInfo);
// app.use(add);

// app.get('/',function(req,res){
//     res.send('welcome');
// });
// app.get('/person',function(req,res){
//     res.send('name:'+req.person.name+',city:'+req.person.city);
// });

// app.listen(80);













// console.log('hello world');
// const square ={
//     area : (a) => (a*a)
// }

// const square = require('./square.js');

// const calsquare=(a)=>{
//     console.log(`${a} and ` +square.area(a));
// }
// calsquare(5);


// const express =require('express');

// const app = express();

// app.get('/',function( request,response){
//     response.send("hello")
// });
// app.listen(7000);

// const express = require('express');
// const app = express();

// const courses = require('./courses');
// app.use('/courses',courses);
// app.get('/',function(req,res){
//     res.send("welcome to coursesss");

// });
// app.listen(80);
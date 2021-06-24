//  //  //  //  //  USING PUG  //   //  //  //  //

const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/',function(req,res){

    var person={                //if else condition
        name : "shina",
        city : "indore",
    };
    res.render('example',{
        data:person
    });
});
app.listen(80);





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
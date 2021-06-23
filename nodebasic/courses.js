const express= require('express');
const router=express.Router();

router.get('/',function(req,res){
    var out = `<h3>WELCOME</h3>`;
    // out+=`<a href="/courses">courses index</a>`;
    out+=`<a href="/courses/android">ANDROID</a></br>`;
    out+=`<a href="/courses/java">JAVA</a></br>`;
    out+=`<a href="/courses/python">PYTHON</a></br>`;

    res.send(out);
});


router.get('/android',function(req,res){
    var out = `<h3>WELCOME to android</h3>`;
    // out+=`<a href="/courses">courses index</a>`;
    out+=`<a href="/courses">ANDROID</a>`;

    res.send(out);
});


router.get('/java',function(req,res){
    var out = `<h3>WELCOME to java</h3>`;
    // out+=`<a href="/courses">courses index</a>`;
    out+=`<a href="/courses">JAVA</a>`;

    res.send(out);
});

module.exports=router;
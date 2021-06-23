var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'himanshineema31@gmail.com',
        pass :'Ravina@0496'
    }
});
var mailOptions={
    from:'himanshineema31@gmail.com',
    to:'himanshineema31@gmail.com',
    subject:"tutorial",
    text:"hii"
}

transport.sendMail(mailOptions,function(error,info){
if(error){
    console.log(error);
}
else{
    console.log("successfully",info.response)
}
})
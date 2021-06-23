var fs = require('fs');
var rs =fs.createReadStream('./demo.txt');
rs.on('open',function(){
    console.log('open','rs');
})


// var events=require('events');
// var eventEmitter=new events.EventEmitter();



// eventEmitter.on('watch',function(){
//     console.log(" john is watching");
// })

// eventEmitter.emit('watch')
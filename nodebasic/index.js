// console.log('hello world');
// const square ={
//     area : (a) => (a*a)
// }
const square = require('./square.js');

const calsquare=(a)=>{
    console.log(`${a} and ` +square.area(a));
}
calsquare(5);
